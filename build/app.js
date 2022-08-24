"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var sum = function sum(a, b) {
  return a + b;
};

sum(4, 10);

var NewClasss = /*#__PURE__*/function () {
  function NewClasss(name) {
    _classCallCheck(this, NewClasss);

    this._name = name;
  }

  _createClass(NewClasss, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);

  return NewClasss;
}();

var h = new NewClasss("Mango");