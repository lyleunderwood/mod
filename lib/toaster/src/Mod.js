var Mod, root;

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
