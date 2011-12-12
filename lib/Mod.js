
(function() {
  var EmbeddedUI, Graph, Mod, PluginLoader, Toolbar, pkg, root;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  pkg = function(ns) {
    var curr, index, part, parts, _len;
    curr = null;
    parts = [].concat = ns.split(".");
    for (index = 0, _len = parts.length; index < _len; index++) {
      part = parts[index];
      if (curr === null) {
        curr = eval(part);
        continue;
      } else {
        if (curr[part] == null) {
          curr = curr[part] = {};
        } else {
          curr = curr[part];
        }
      }
    }
    return curr;
  };

  EmbeddedUI = (function() {

    function EmbeddedUI(options) {
      this.options = options;
    }

    return EmbeddedUI;

  })();

  Graph = (function() {

    __extends(Graph, EmbeddedUI);

    function Graph(options) {
      if (options == null) options = {};
      Graph.__super__.constructor.apply(this, arguments);
      this.options = options;
    }

    return Graph;

  })();

  Toolbar = (function() {

    function Toolbar(options, node) {
      if (options == null) options = {};
      if (node == null) node = null;
      this.options = options;
      this.node = node;
    }

    Toolbar.prototype.build = function() {
      this.build_container();
      return this.build_options();
    };

    Toolbar.prototype.build_container = function() {
      var _ref;
      if ((_ref = this.node) == null) this.node = document.createElement('div');
      return this.node.className += 'mod_toolbar';
    };

    Toolbar.prototype.build_options = function() {
      var group, option_groups, options, _results;
      options = this.resolve_options();
      option_groups = this.split_groups(options);
      _results = [];
      for (group in option_groups) {
        _results.push(this.build_group(group, option_groups[group]));
      }
      return _results;
    };

    Toolbar.prototype.resolve_options = function() {
      var options, plugin, plugins;
      plugins = this.options.plugins || this.plugins;
      if (this.options.groups) {
        plugins = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = plugins.length; _i < _len; _i++) {
            plugin = plugins[_i];
            if (this.options.groups.indexOf(plugin.group) !== -1) {
              _results.push(plugin);
            }
          }
          return _results;
        }).call(this);
      }
      if (this.options.only) {
        plugins = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = plugins.length; _i < _len; _i++) {
            plugin = plugins[_i];
            if (this.options.only.indexOf(plugin.name) !== -1) {
              _results.push(plugin);
            }
          }
          return _results;
        }).call(this);
      }
      if (this.options.except) {
        plugins = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = plugins.length; _i < _len; _i++) {
            plugin = plugins[_i];
            if (this.options.except.indexOf(plugin.name) === -1) {
              _results.push(plugin);
            }
          }
          return _results;
        }).call(this);
      }
      return options = plugins;
    };

    Toolbar.prototype.split_groups = function(options) {
      var groups, option, _i, _len;
      groups = {};
      for (_i = 0, _len = options.length; _i < _len; _i++) {
        option = options[_i];
        if (!groups[option.group]) groups[option.group] = [];
        groups[option.group].push(option);
      }
      return groups;
    };

    Toolbar.prototype.build_group = function(name, options) {
      var label, list, node, option, _i, _len, _results;
      node = document.createElement('div');
      node.className = 'mod_option_group';
      this.node.appendChild(node);
      label = document.createElement('label');
      label.className = 'mod_label';
      label.innerHTML = name;
      node.appendChild(label);
      list = document.createElement('ul');
      node.appendChild(list);
      options.sort(function(a, b) {
        return (a.position || Infinity) - (b.position || Infinity);
      });
      _results = [];
      for (_i = 0, _len = options.length; _i < _len; _i++) {
        option = options[_i];
        _results.push(this.build_option(option, list));
      }
      return _results;
    };

    Toolbar.prototype.build_option = function(option, parent) {
      var button, item;
      var _this = this;
      item = document.createElement('li');
      parent.appendChild(item);
      button = document.createElement('a');
      button.innerHTML = option.name;
      button.href = '#';
      item.appendChild(button);
      return button.addEventListener('click', function(event) {
        event.preventDefault();
        return _this.activate_plugin(option);
      });
    };

    Toolbar.prototype.activate_plugin = function(plugin) {
      if (this.plugin_callback) return this.plugin_callback(plugin);
    };

    return Toolbar;

  })();

  Toolbar.set_plugins = function(plugins) {
    return this.prototype.plugins = plugins;
  };

  Toolbar.set_plugin_callback = function(callback) {
    return this.prototype.plugin_callback = callback;
  };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Mod = (function() {

    function Mod(options) {
      if (options == null) options = {};
      this.options = options;
      this.plugins = [];
      this.toolbars = [];
      this.plugin_loader = new PluginLoader;
    }

    return Mod;

  })();

  Mod.Toolbar = Toolbar;

  root.Mod = Mod;

  PluginLoader = (function() {

    function PluginLoader(options) {
      this.options = options;
    }

    return PluginLoader;

  })();

}).call(this);
