class Toolbar
  constructor: (options = {}, node = null) ->
    @options = options
    @node = node

  build: () ->
    @build_container()
    @build_options()

  build_container: () ->
    @node ?= document.createElement('div')
    @node.className += 'mod_toolbar'

  build_options: () ->
    options = @resolve_options()
    option_groups = @split_groups(options)
    @build_group group, option_groups[group] for group of option_groups

  resolve_options: () ->
    plugins = @options.plugins || @plugins

    # only keep plugins of the allowed group
    if @options.groups
      plugins = (plugin for plugin in plugins when @options.groups.indexOf(plugin.group) isnt -1)

    # only keep plugins specified in only
    if @options.only
      plugins = (plugin for plugin in plugins when @options.only.indexOf(plugin.name) isnt -1)

    # throw out plugins specified in except
    if @options.except
      plugins = (plugin for plugin in plugins when @options.except.indexOf(plugin.name) is -1)

    options = plugins

  # split options into groups
  split_groups: (options) ->
    # build the hash of groups
    groups = {}
    for option in options
      if !groups[option.group]
        groups[option.group] = []

      groups[option.group].push(option)

    groups

  build_group: (name, options) ->
    node = document.createElement('div')
    node.className = 'mod_option_group'
    @node.appendChild(node)

    label = document.createElement('label')
    label.className = 'mod_label'
    label.innerHTML = name
    node.appendChild(label)

    list = document.createElement('ul')
    node.appendChild(list)

    options.sort (a, b) ->
      (a.position || Infinity) - (b.position || Infinity)

    @build_option option, list for option in options

  build_option: (option, parent) ->
    item = document.createElement('li')
    parent.appendChild(item)

    button = document.createElement('a')
    button.innerHTML = option.name
    button.href = '#'
    item.appendChild(button)

    button.addEventListener 'click', (event) =>
      event.preventDefault()
      @activate_plugin option

  activate_plugin: (plugin) ->
    if @plugin_callback then @plugin_callback plugin

Toolbar.set_plugins = (plugins) ->
  this::plugins = plugins

Toolbar.set_plugin_callback = (callback) ->
  this::plugin_callback = callback