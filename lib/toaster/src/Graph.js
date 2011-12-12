var Graph;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Graph = (function() {

  __extends(Graph, EmbeddedUI);

  function Graph(options) {
    if (options == null) options = {};
    Graph.__super__.constructor.apply(this, arguments);
    this.options = options;
  }

  return Graph;

})();
