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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var serializedATN = ["\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786", "\u5964\x02\x18\xA6\b\x01\x04\x02\t\x02\x04\x03\t\x03", "\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07", "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04", "\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10", "\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13", "\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17", "\t\x17\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04", "\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06", "\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07", "\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b", "\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03", "\n\x03\n\x03\n\x03\x0B\x03\x0B\x05\x0BU\n\x0B\x03", "\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r_", "\n\r\x07\ra\n\r\f\r\x0E\rd\x0B\r\x03\x0E\x03\x0E\x03", "\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05", "\x0Fn\n\x0F\x07\x0Fp\n\x0F\f\x0F\x0E\x0Fs\x0B\x0F", "\x03\x10\x06\x10v\n\x10\r\x10\x0E\x10w\x03\x11\x03", "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05", "\x12\x81\n\x12\x03\x13\x03\x13\x03\x13\x03\x13", "\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x8B\n", "\x13\x03\x14\x03\x14\x03\x15\x07\x15\x90\n\x15", "\f\x15\x0E\x15\x93\x0B\x15\x03\x15\x03\x15\x03", "\x16\x06\x16\x98\n\x16\r\x16\x0E\x16\x99\x03\x16", "\x03\x16\x03\x17\x03\x17\x07\x17\xA0\n\x17\f\x17", "\x0E\x17\xA3\x0B\x17\x03\x17\x03\x17\x02\x02\x18", "\x03\x03\x05\x04\x07\x05\t\x06\x0B\x07\r\b\x0F\t", "\x11\n\x13\x0B\x15\f\x17\r\x19\x0E\x1B\x0F\x1D\x10", "\x1F\x11!\x12#\x13%\x14'\x15)\x16+\x17-\x18\x03", "\x02\x0B\x06\x02\f\f\x0F\x0F$$^^\x06\x02\f\f\x0F\x0F", "))^^\x03\x022;\x04\x02>>@@\x06\x02,-//11``\x05\x02C", "\\aac|\x04\x02C\\c|\f\x02\x0B\x0F\"\"\x87\x87\xA2\xA2", "\u1682\u1682\u2002\u200C\u202A\u202B\u2031\u2031\u2061\u2061\u3002\u3002", "\x04\x02\f\f\x0F\x0F\x02\xB5\x02\x03\x03\x02\x02", "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02", "\x02\x02\t\x03\x02\x02\x02\x02\x0B\x03\x02\x02", "\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02", "\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02", "\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02", "\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02", "\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02", "\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02", "\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02", ")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03", "\x02\x02\x02\x03/\x03\x02\x02\x02\x051\x03\x02", "\x02\x02\x073\x03\x02\x02\x02\t7\x03\x02\x02\x02", "\x0B9\x03\x02\x02\x02\r;\x03\x02\x02\x02\x0FC\x03", "\x02\x02\x02\x11G\x03\x02\x02\x02\x13K\x03\x02", "\x02\x02\x15T\x03\x02\x02\x02\x17V\x03\x02\x02", "\x02\x19Y\x03\x02\x02\x02\x1Be\x03\x02\x02\x02", "\x1Dh\x03\x02\x02\x02\x1Fu\x03\x02\x02\x02!y\x03", "\x02\x02\x02#\x80\x03\x02\x02\x02%\x8A\x03\x02", "\x02\x02'\x8C\x03\x02\x02\x02)\x91\x03\x02\x02", "\x02+\x97\x03\x02\x02\x02-\x9D\x03\x02\x02\x02", "/0\x07*\x02\x020\x04\x03\x02\x02\x0212\x07+\x02", "\x022\x06\x03\x02\x02\x0234\x07?\x02\x0245\x07?", "\x02\x0256\x07?\x02\x026\b\x03\x02\x02\x0278\x07", ".\x02\x028\n\x03\x02\x02\x029:\x07a\x02\x02:\f\x03", "\x02\x02\x02;<\x07k\x02\x02<=\x07o\x02\x02=>\x07", "r\x02\x02>?\x07n\x02\x02?@\x07k\x02\x02@A\x07g\x02", "\x02AB\x07u\x02\x02B\x0E\x03\x02\x02\x02CD\x07h", "\x02\x02DE\x07q\x02\x02EF\x07t\x02\x02F\x10\x03", "\x02\x02\x02GH\x07c\x02\x02HI\x07n\x02\x02IJ\x07", "n\x02\x02J\x12\x03\x02\x02\x02KL\x07g\x02\x02LM", "\x07z\x02\x02MN\x07k\x02\x02NO\x07u\x02\x02OP\x07", "v\x02\x02PQ\x07u\x02\x02Q\x14\x03\x02\x02\x02RU", "\x05\x17\f\x02SU\x05\x1B\x0E\x02TR\x03\x02\x02\x02", "TS\x03\x02\x02\x02U\x16\x03\x02\x02\x02VW\x05\x19", "\r\x02WX\x07$\x02\x02X\x18\x03\x02\x02\x02Yb\x07", "$\x02\x02Za\n\x02\x02\x02[^\x07^\x02\x02\\_\x0B\x02", "\x02\x02]_\x07\x02\x02\x03^\\\x03\x02\x02\x02^]", "\x03\x02\x02\x02_a\x03\x02\x02\x02`Z\x03\x02\x02", "\x02`[\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02", "\x02\x02bc\x03\x02\x02\x02c\x1A\x03\x02\x02\x02", "db\x03\x02\x02\x02ef\x05\x1D\x0F\x02fg\x07)\x02", "\x02g\x1C\x03\x02\x02\x02hq\x07)\x02\x02ip\n\x03", "\x02\x02jm\x07^\x02\x02kn\x0B\x02\x02\x02ln\x07", "\x02\x02\x03mk\x03\x02\x02\x02ml\x03\x02\x02\x02", "np\x03\x02\x02\x02oi\x03\x02\x02\x02oj\x03\x02\x02", "\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02", "\x02\x02r\x1E\x03\x02\x02\x02sq\x03\x02\x02\x02", "tv\x05!\x11\x02ut\x03\x02\x02\x02vw\x03\x02\x02", "\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x \x03\x02", "\x02\x02yz\t\x04\x02\x02z\"\x03\x02\x02\x02{|\x07", "c\x02\x02|}\x07p\x02\x02}\x81\x07f\x02\x02~\x7F", "\x07q\x02\x02\x7F\x81\x07t\x02\x02\x80{\x03\x02", "\x02\x02\x80~\x03\x02\x02\x02\x81$\x03\x02\x02", "\x02\x82\x8B\x07?\x02\x02\x83\x84\x07#\x02\x02", "\x84\x8B\x07?\x02\x02\x85\x86\x07>\x02\x02\x86", "\x8B\x07?\x02\x02\x87\x88\x07@\x02\x02\x88\x8B", "\x07?\x02\x02\x89\x8B\t\x05\x02\x02\x8A\x82\x03", "\x02\x02\x02\x8A\x83\x03\x02\x02\x02\x8A\x85\x03", "\x02\x02\x02\x8A\x87\x03\x02\x02\x02\x8A\x89\x03", "\x02\x02\x02\x8B&\x03\x02\x02\x02\x8C\x8D\t\x06", "\x02\x02\x8D(\x03\x02\x02\x02\x8E\x90\t\x07\x02", "\x02\x8F\x8E\x03\x02\x02\x02\x90\x93\x03\x02\x02", "\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02", "\x02\x92\x94\x03\x02\x02\x02\x93\x91\x03\x02\x02", "\x02\x94\x95\t\b\x02\x02\x95*\x03\x02\x02\x02\x96", "\x98\t\t\x02\x02\x97\x96\x03\x02\x02\x02\x98\x99", "\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A", "\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C", "\b\x16\x02\x02\x9C,\x03\x02\x02\x02\x9D\xA1\x07", "%\x02\x02\x9E\xA0\n\n\x02\x02\x9F\x9E\x03\x02\x02", "\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02", "\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02", "\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA5\b\x17\x02", "\x02\xA5.\x03\x02\x02\x02\x10\x02T^`bmoqw\x80\x8A", "\x91\x99\xA1\x03\b\x02\x02"].join("");
var atn = new _antlr["default"].atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new _antlr["default"].dfa.DFA(ds, index);
});

var logicspecLexer = /*#__PURE__*/function (_antlr4$Lexer) {
  _inherits(logicspecLexer, _antlr4$Lexer);

  var _super = _createSuper(logicspecLexer);

  function logicspecLexer(input) {
    var _this;

    _classCallCheck(this, logicspecLexer);

    _this = _super.call(this, input);
    _this._interp = new _antlr["default"].atn.LexerATNSimulator(_assertThisInitialized(_this), atn, decisionsToDFA, new _antlr["default"].PredictionContextCache());
    return _this;
  }

  _createClass(logicspecLexer, [{
    key: "atn",
    get: function get() {
      return atn;
    }
  }]);

  return logicspecLexer;
}(_antlr["default"].Lexer);

exports["default"] = logicspecLexer;

_defineProperty(logicspecLexer, "grammarFileName", "logicspec.g4");

_defineProperty(logicspecLexer, "channelNames", ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"]);

_defineProperty(logicspecLexer, "modeNames", ["DEFAULT_MODE"]);

_defineProperty(logicspecLexer, "literalNames", [null, "'('", "')'", "'==='", "','", "'_'", "'implies'", "'for'", "'all'", "'exists'"]);

_defineProperty(logicspecLexer, "symbolicNames", [null, null, null, null, null, null, null, null, null, null, "STRING_LITERAL", "DOUBLE_QUOTED_STRING_LITERAL", "UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL", "SINGLE_QUOTED_STRING_LITERAL", "UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL", "INT", "DIGIT", "LOGICAL_OPERATOR", "RELATIONAL_OPERATOR", "ARITHMETIC_OPERATOR", "IDENTIFIER", "WS", "LINE_COMMENT"]);

_defineProperty(logicspecLexer, "ruleNames", ["T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", "STRING_LITERAL", "DOUBLE_QUOTED_STRING_LITERAL", "UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL", "SINGLE_QUOTED_STRING_LITERAL", "UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL", "INT", "DIGIT", "LOGICAL_OPERATOR", "RELATIONAL_OPERATOR", "ARITHMETIC_OPERATOR", "IDENTIFIER", "WS", "LINE_COMMENT"]);

logicspecLexer.EOF = _antlr["default"].Token.EOF;
logicspecLexer.T__0 = 1;
logicspecLexer.T__1 = 2;
logicspecLexer.T__2 = 3;
logicspecLexer.T__3 = 4;
logicspecLexer.T__4 = 5;
logicspecLexer.T__5 = 6;
logicspecLexer.T__6 = 7;
logicspecLexer.T__7 = 8;
logicspecLexer.T__8 = 9;
logicspecLexer.STRING_LITERAL = 10;
logicspecLexer.DOUBLE_QUOTED_STRING_LITERAL = 11;
logicspecLexer.UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL = 12;
logicspecLexer.SINGLE_QUOTED_STRING_LITERAL = 13;
logicspecLexer.UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL = 14;
logicspecLexer.INT = 15;
logicspecLexer.DIGIT = 16;
logicspecLexer.LOGICAL_OPERATOR = 17;
logicspecLexer.RELATIONAL_OPERATOR = 18;
logicspecLexer.ARITHMETIC_OPERATOR = 19;
logicspecLexer.IDENTIFIER = 20;
logicspecLexer.WS = 21;
logicspecLexer.LINE_COMMENT = 22;
module.exports = exports.default;