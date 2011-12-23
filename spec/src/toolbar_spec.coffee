with_dom (window) ->
  Feature("Toolbar")

    .scenario("Creating a new Toolbar")
      .when "I create the default Toolbar", ->
        @toolbar = new Mod.Toolbar
        @callback()

      .then "it should have default options", ->
        expect(@toolbar.options).to.be.an('object')

      .and "it should setup the default node", ->
        expect(@toolbar.node).to.be.ok()

      .and "the node should have the mod_toolbar class", ->
        expect(@toolbar.node.className).to.contain 'mod_toolbar'

      .complete()

    .scenario("Creating a new Toolbar given a node")
      .when "I pass it a node", ->
        @node = window.document.createElement('div')
        @toolbar = new Mod.Toolbar @node
        @callback()

      .then "the target node should be set", ->
        expect(@toolbar.node).to.be @node

      .and "the node should have the mod_toolbar class added", ->
        expect(@toolbar.node.className).to.contain 'mod_toolbar'

      .complete()

    .scenario("Creating a new Toolbar given some options")
      .when "I pass it some options", ->
        @toolbar = new Mod.Toolbar null, 'test'
        @callback()

      .then "options should be set", ->
        expect(@toolbar.options).to.equal('test')

      .complete()

    .finish(module)
