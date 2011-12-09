
(function() {
  var pkg;

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

  console.log("nice");

}).call(this);
