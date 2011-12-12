
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

  root.Mod = Mod;

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

    function Toolbar(options) {
      this.options = options;
    }

    return Toolbar;

  })();

  PluginLoader = (function() {

    function PluginLoader(options) {
      this.options = options;
    }

    return PluginLoader;

  })();

}).call(this);
