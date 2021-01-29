"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MyComponent = require("./MyComponent");

Object.keys(_MyComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MyComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MyComponent[key];
    }
  });
});
//# sourceMappingURL=index.js.map