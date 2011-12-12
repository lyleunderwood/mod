
root = exports ? this

class Mod
  constructor: (options = {}) ->
    @options = options
    @plugins = []
    @toolbars = []
    @plugin_loader = new PluginLoader

Mod.Toolbar = Toolbar
root.Mod = Mod