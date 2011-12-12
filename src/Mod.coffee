
root = exports ? this

class Mod
  constructor: (options = {}) ->
    @options = options
    @plugins = []
    @toolbars = []
    @plugin_loader = new PluginLoader

root.Mod = Mod