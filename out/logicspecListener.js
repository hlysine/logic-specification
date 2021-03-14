"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _antlr = _interopRequireDefault(require("antlr4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// This class defines a complete listener for a parse tree produced by logicspecParser.
var logicspecListener = /*#__PURE__*/function (_antlr4$tree$ParseTre) {
  _inherits(logicspecListener, _antlr4$tree$ParseTre);

  var _super = _createSuper(logicspecListener);

  function logicspecListener() {
    _classCallCheck(this, logicspecListener);

    return _super.apply(this, arguments);
  }

  _createClass(logicspecListener, [{
    key: "enterFile",
    value: // Enter a parse tree produced by logicspecParser#file.
    function enterFile(ctx) {} // Exit a parse tree produced by logicspecParser#file.

  }, {
    key: "exitFile",
    value: function exitFile(ctx) {} // Enter a parse tree produced by logicspecParser#predicate.

  }, {
    key: "enterPredicate",
    value: function enterPredicate(ctx) {} // Exit a parse tree produced by logicspecParser#predicate.

  }, {
    key: "exitPredicate",
    value: function exitPredicate(ctx) {} // Enter a parse tree produced by logicspecParser#logical_expression.

  }, {
    key: "enterLogical_expression",
    value: function enterLogical_expression(ctx) {} // Exit a parse tree produced by logicspecParser#logical_expression.

  }, {
    key: "exitLogical_expression",
    value: function exitLogical_expression(ctx) {} // Enter a parse tree produced by logicspecParser#arithmetic_expression.

  }, {
    key: "enterArithmetic_expression",
    value: function enterArithmetic_expression(ctx) {} // Exit a parse tree produced by logicspecParser#arithmetic_expression.

  }, {
    key: "exitArithmetic_expression",
    value: function exitArithmetic_expression(ctx) {} // Enter a parse tree produced by logicspecParser#bracketed_arithmetic_expression.

  }, {
    key: "enterBracketed_arithmetic_expression",
    value: function enterBracketed_arithmetic_expression(ctx) {} // Exit a parse tree produced by logicspecParser#bracketed_arithmetic_expression.

  }, {
    key: "exitBracketed_arithmetic_expression",
    value: function exitBracketed_arithmetic_expression(ctx) {} // Enter a parse tree produced by logicspecParser#predicate_call.

  }, {
    key: "enterPredicate_call",
    value: function enterPredicate_call(ctx) {} // Exit a parse tree produced by logicspecParser#predicate_call.

  }, {
    key: "exitPredicate_call",
    value: function exitPredicate_call(ctx) {} // Enter a parse tree produced by logicspecParser#indexed_accessor.

  }, {
    key: "enterIndexed_accessor",
    value: function enterIndexed_accessor(ctx) {} // Exit a parse tree produced by logicspecParser#indexed_accessor.

  }, {
    key: "exitIndexed_accessor",
    value: function exitIndexed_accessor(ctx) {} // Enter a parse tree produced by logicspecParser#implies_block.

  }, {
    key: "enterImplies_block",
    value: function enterImplies_block(ctx) {} // Exit a parse tree produced by logicspecParser#implies_block.

  }, {
    key: "exitImplies_block",
    value: function exitImplies_block(ctx) {} // Enter a parse tree produced by logicspecParser#for_all_block.

  }, {
    key: "enterFor_all_block",
    value: function enterFor_all_block(ctx) {} // Exit a parse tree produced by logicspecParser#for_all_block.

  }, {
    key: "exitFor_all_block",
    value: function exitFor_all_block(ctx) {} // Enter a parse tree produced by logicspecParser#exists_block.

  }, {
    key: "enterExists_block",
    value: function enterExists_block(ctx) {} // Exit a parse tree produced by logicspecParser#exists_block.

  }, {
    key: "exitExists_block",
    value: function exitExists_block(ctx) {} // Enter a parse tree produced by logicspecParser#identifier_list.

  }, {
    key: "enterIdentifier_list",
    value: function enterIdentifier_list(ctx) {} // Exit a parse tree produced by logicspecParser#identifier_list.

  }, {
    key: "exitIdentifier_list",
    value: function exitIdentifier_list(ctx) {} // Enter a parse tree produced by logicspecParser#identifier.

  }, {
    key: "enterIdentifier",
    value: function enterIdentifier(ctx) {} // Exit a parse tree produced by logicspecParser#identifier.

  }, {
    key: "exitIdentifier",
    value: function exitIdentifier(ctx) {}
  }]);

  return logicspecListener;
}(_antlr["default"].tree.ParseTreeListener);

exports["default"] = logicspecListener;
module.exports = exports.default;