Mod
===

Development
-----------

Run the following to watch src/*.coffee for changes and automatically build to
lib/

    toaster -w

Planning
--------

Right now I'm working on putting together the basic architecture of Mod. Also,
I'm going to make a final decision about whether "mod" is a valid name. it seems
like it should be fine. "mod" doesn't appear to be reserved in coffeescript or
javascript. Whatever.

So I'm thinking something like the following:

Mod
---
Has two important array properties, <tt>plugins</tt> and <tt>toolbars</tt>.
These hold on to corresponding instances of each. Classes in the <tt>Mod</tt>
namespace include:

PluginLoader
------------
Handles loading up all the plugins and putting them into the plugins array.

Toolbar
-------
Represents the HTML portion of the UI, a list of buttons which defaults to
simple activators for each of the plugins, grouped by type. A toolbar can be
configured to exclude activators for plugins, or only have a specific set.

EmbeddedUI
----------
This is an abstract class which holds functionality for UI elements which are
drawn into the actual <tt>canvas</tt> element. It holds onto the instance of
said </tt>canvas</tt> element and does some other stuff which is not yet clear.
These classes inherit from <tt>EmbeddedUI</tt>:

    Graph
    Selection
      Object
      Polygon
      Point