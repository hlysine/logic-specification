"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _antlr = _interopRequireDefault(require("antlr4"));

var _logicspecListener = _interopRequireDefault(require("./logicspecListener.js"));

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

var serializedATN = ["\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786", "\u5964\x03\x1B\x9F\x04\x02\t\x02\x04\x03\t\x03\x04", "\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t", "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04", "\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x03\x02\x07\x02\x1E", "\n\x02\f\x02\x0E\x02!\x0B\x02\x03\x02\x03\x02\x03", "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03", "\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06\x040", "\n\x04\r\x04\x0E\x041\x03\x04\x03\x04\x03\x04\x03", "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03", "\x04\x05\x04>\n\x04\x03\x04\x03\x04\x03\x04\x07", "\x04C\n\x04\f\x04\x0E\x04F\x0B\x04\x03\x05\x03\x05", "\x05\x05J\n\x05\x03\x06\x03\x06\x03\x06\x03\x06", "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06", "\x05\x06V\n\x06\x03\x06\x03\x06\x03\x06\x03\x06", "\x03\x06\x03\x06\x07\x06^\n\x06\f\x06\x0E\x06a\x0B", "\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03", "\b\x03\b\x03\b\x03\b\x07\bl\n\b\f\b\x0E\bo\x0B\b\x03\b", "\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03", "\n\x03\n\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x0B", "\x03\x0B\x03\x0B\x05\x0B\x83\n\x0B\x03\x0B\x03", "\x0B\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x8D", "\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x07\r\x94\n\r\f\r\x0E", "\r\x97\x0B\r\x05\r\x99\n\r\x03\x0E\x03\x0E\x05\x0E", "\x9D\n\x0E\x03\x0E\x02\x04\x06\n\x0F\x02\x04\x06", "\b\n\f\x0E\x10\x12\x14\x16\x18\x1A\x02\x02\x02\xA8", "\x02\x1F\x03\x02\x02\x02\x04$\x03\x02\x02\x02", "\x06=\x03\x02\x02\x02\bI\x03\x02\x02\x02\nU\x03", "\x02\x02\x02\fb\x03\x02\x02\x02\x0Ef\x03\x02\x02", "\x02\x10r\x03\x02\x02\x02\x12x\x03\x02\x02\x02", "\x14{\x03\x02\x02\x02\x16\x86\x03\x02\x02\x02", "\x18\x98\x03\x02\x02\x02\x1A\x9C\x03\x02\x02\x02", "\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02", "\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02", "\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03", "\x02\x02\x02\"#\x07\x02\x02\x03#\x03\x03\x02\x02", "\x02$%\x07\x19\x02\x02%&\x07\x03\x02\x02&'\x05", "\x18\r\x02'(\x07\x04\x02\x02()\x07\x05\x02\x02", ")*\x05\x06\x04\x02*\x05\x03\x02\x02\x02+,\b\x04", "\x01\x02,/\x05\b\x05\x02-.\x07\x16\x02\x02.0\x05", "\b\x05\x02/-\x03\x02\x02\x0201\x03\x02\x02\x021", "/\x03\x02\x02\x0212\x03\x02\x02\x022>\x03\x02\x02", "\x0234\x07\x13\x02\x024>\x05\x06\x04\b5>\x07\x14", "\x02\x0267\x07\x03\x02\x0278\x05\x06\x04\x0289\x07", "\x04\x02\x029>\x03\x02\x02\x02:>\x05\x0E\b\x02;", ">\x05\x14\x0B\x02<>\x05\x16\f\x02=+\x03\x02\x02", "\x02=3\x03\x02\x02\x02=5\x03\x02\x02\x02=6\x03\x02", "\x02\x02=:\x03\x02\x02\x02=;\x03\x02\x02\x02=<\x03", "\x02\x02\x02>D\x03\x02\x02\x02?@\f\n\x02\x02@A\x07", "\x15\x02\x02AC\x05\x06\x04\x0BB?\x03\x02\x02\x02", "CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02", "\x02E\x07\x03\x02\x02\x02FD\x03\x02\x02\x02GJ\x05", "\n\x06\x02HJ\x07\f\x02\x02IG\x03\x02\x02\x02IH\x03", "\x02\x02\x02J\t\x03\x02\x02\x02KL\b\x06\x01\x02", "LM\x07\x17\x02\x02MV\x05\n\x06\bNO\x07\x11\x02\x02", "OV\x05\x1A\x0E\x02PQ\x07\x11\x02\x02QV\x05\f\x07", "\x02RV\x05\f\x07\x02SV\x07\x11\x02\x02TV\x05\x1A", "\x0E\x02UK\x03\x02\x02\x02UN\x03\x02\x02\x02UP\x03", "\x02\x02\x02UR\x03\x02\x02\x02US\x03\x02\x02\x02", "UT\x03\x02\x02\x02V_\x03\x02\x02\x02WX\f\n\x02\x02", "XY\x07\x18\x02\x02Y^\x05\n\x06\x0BZ[\f\t\x02\x02[", "\\\x07\x17\x02\x02\\^\x05\n\x06\n]W\x03\x02\x02\x02", "]Z\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02", "\x02_`\x03\x02\x02\x02`\x0B\x03\x02\x02\x02a_\x03", "\x02\x02\x02bc\x07\x03\x02\x02cd\x05\n\x06\x02d", "e\x07\x04\x02\x02e\r\x03\x02\x02\x02fg\x07\x19\x02", "\x02gh\x07\x03\x02\x02hm\x05\n\x06\x02ij\x07\x06", "\x02\x02jl\x05\n\x06\x02ki\x03\x02\x02\x02lo\x03", "\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02", "np\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x04\x02", "\x02q\x0F\x03\x02\x02\x02rs\x07\x19\x02\x02st\x07", "\x07\x02\x02tu\x07\x03\x02\x02uv\x05\n\x06\x02v", "w\x07\x04\x02\x02w\x11\x03\x02\x02\x02xy\x07\b\x02", "\x02yz\x05\x06\x04\x02z\x13\x03\x02\x02\x02{|\x07", "\t\x02\x02|}\x07\n\x02\x02}\x82\x05\x18\r\x02~\x7F", "\x07\x03\x02\x02\x7F\x80\x05\x06\x04\x02\x80\x81", "\x07\x04\x02\x02\x81\x83\x03\x02\x02\x02\x82~", "\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84", "\x03\x02\x02\x02\x84\x85\x05\x12\n\x02\x85\x15", "\x03\x02\x02\x02\x86\x87\x07\x0B\x02\x02\x87\x8C", "\x05\x18\r\x02\x88\x89\x07\x03\x02\x02\x89\x8A", "\x05\x06\x04\x02\x8A\x8B\x07\x04\x02\x02\x8B\x8D", "\x03\x02\x02\x02\x8C\x88\x03\x02\x02\x02\x8C\x8D", "\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F", "\x05\x12\n\x02\x8F\x17\x03\x02\x02\x02\x90\x95", "\x05\x1A\x0E\x02\x91\x92\x07\x06\x02\x02\x92\x94", "\x05\x1A\x0E\x02\x93\x91\x03\x02\x02\x02\x94\x97", "\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96", "\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95", "\x03\x02\x02\x02\x98\x90\x03\x02\x02\x02\x98\x99", "\x03\x02\x02\x02\x99\x19\x03\x02\x02\x02\x9A\x9D", "\x05\x10\t\x02\x9B\x9D\x07\x19\x02\x02\x9C\x9A", "\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\x1B", "\x03\x02\x02\x02\x10\x1F1=DIU]_m\x82\x8C\x95\x98", "\x9C"].join("");
var atn = new _antlr["default"].atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new _antlr["default"].dfa.DFA(ds, index);
});
var sharedContextCache = new _antlr["default"].PredictionContextCache();

var logicspecParser = /*#__PURE__*/function (_antlr4$Parser) {
  _inherits(logicspecParser, _antlr4$Parser);

  var _super = _createSuper(logicspecParser);

  function logicspecParser(input) {
    var _this;

    _classCallCheck(this, logicspecParser);

    _this = _super.call(this, input);
    _this._interp = new _antlr["default"].atn.ParserATNSimulator(_assertThisInitialized(_this), atn, decisionsToDFA, sharedContextCache);
    _this.ruleNames = logicspecParser.ruleNames;
    _this.literalNames = logicspecParser.literalNames;
    _this.symbolicNames = logicspecParser.symbolicNames;
    return _this;
  }

  _createClass(logicspecParser, [{
    key: "atn",
    get: function get() {
      return atn;
    }
  }, {
    key: "sempred",
    value: function sempred(localctx, ruleIndex, predIndex) {
      switch (ruleIndex) {
        case 2:
          return this.logical_expression_sempred(localctx, predIndex);

        case 4:
          return this.arithmetic_expression_sempred(localctx, predIndex);

        default:
          throw "No predicate with index:" + ruleIndex;
      }
    }
  }, {
    key: "logical_expression_sempred",
    value: function logical_expression_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 0:
          return this.precpred(this._ctx, 8);

        default:
          throw "No predicate with index:" + predIndex;
      }
    }
  }, {
    key: "arithmetic_expression_sempred",
    value: function arithmetic_expression_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 1:
          return this.precpred(this._ctx, 8);

        case 2:
          return this.precpred(this._ctx, 7);

        default:
          throw "No predicate with index:" + predIndex;
      }
    }
  }, {
    key: "file",
    value: function file() {
      var localctx = new FileContext(this, this._ctx, this.state);
      this.enterRule(localctx, 0, logicspecParser.RULE_file);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        while (_la === logicspecParser.IDENTIFIER) {
          this.state = 26;
          this.predicate();
          this.state = 31;

          this._errHandler.sync(this);

          _la = this._input.LA(1);
        }

        this.state = 32;
        this.match(logicspecParser.EOF);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "predicate",
    value: function predicate() {
      var localctx = new PredicateContext(this, this._ctx, this.state);
      this.enterRule(localctx, 2, logicspecParser.RULE_predicate);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(logicspecParser.IDENTIFIER);
        this.state = 35;
        this.match(logicspecParser.T__0);
        this.state = 36;
        this.identifier_list();
        this.state = 37;
        this.match(logicspecParser.T__1);
        this.state = 38;
        this.match(logicspecParser.T__2);
        this.state = 39;
        this.logical_expression(0);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "logical_expression",
    value: function logical_expression(_p) {
      if (_p === undefined) {
        _p = 0;
      }

      var _parentctx = this._ctx;
      var _parentState = this.state;
      var localctx = new Logical_expressionContext(this, this._ctx, _parentState);
      var _prevctx = localctx;
      var _startState = 4;
      this.enterRecursionRule(localctx, 4, logicspecParser.RULE_logical_expression, _p);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;

        this._errHandler.sync(this);

        var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);

        switch (la_) {
          case 1:
            this.state = 42;
            this.string_or_arithmetic_expression();
            this.state = 45;

            this._errHandler.sync(this);

            var _alt = 1;

            do {
              switch (_alt) {
                case 1:
                  this.state = 43;
                  this.match(logicspecParser.RELATIONAL_OPERATOR);
                  this.state = 44;
                  this.string_or_arithmetic_expression();
                  break;

                default:
                  throw new _antlr["default"].error.NoViableAltException(this);
              }

              this.state = 47;

              this._errHandler.sync(this);

              _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
            } while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER);

            break;

          case 2:
            this.state = 49;
            this.match(logicspecParser.UNARY_LOGICAL_OPERATOR);
            this.state = 50;
            this.logical_expression(6);
            break;

          case 3:
            this.state = 51;
            this.match(logicspecParser.LOGICAL_CONSTANT);
            break;

          case 4:
            this.state = 52;
            this.match(logicspecParser.T__0);
            this.state = 53;
            this.logical_expression(0);
            this.state = 54;
            this.match(logicspecParser.T__1);
            break;

          case 5:
            this.state = 56;
            this.predicate_call();
            break;

          case 6:
            this.state = 57;
            this.for_all_block();
            break;

          case 7:
            this.state = 58;
            this.exists_block();
            break;
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 66;

        this._errHandler.sync(this);

        var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);

        while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }

            _prevctx = localctx;
            localctx = new Logical_expressionContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_logical_expression);
            this.state = 61;

            if (!this.precpred(this._ctx, 8)) {
              throw new _antlr["default"].error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
            }

            this.state = 62;
            this.match(logicspecParser.LOGICAL_OPERATOR);
            this.state = 63;
            this.logical_expression(9);
          }

          this.state = 68;

          this._errHandler.sync(this);

          _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
        }
      } catch (error) {
        if (error instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = error;

          this._errHandler.reportError(this, error);

          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }

      return localctx;
    }
  }, {
    key: "string_or_arithmetic_expression",
    value: function string_or_arithmetic_expression() {
      var localctx = new String_or_arithmetic_expressionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 6, logicspecParser.RULE_string_or_arithmetic_expression);

      try {
        this.state = 71;

        this._errHandler.sync(this);

        switch (this._input.LA(1)) {
          case logicspecParser.T__0:
          case logicspecParser.INT:
          case logicspecParser.UNARY_BINARY_ARITHMETIC_OPERATOR:
          case logicspecParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 69;
            this.arithmetic_expression(0);
            break;

          case logicspecParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.match(logicspecParser.STRING_LITERAL);
            break;

          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "arithmetic_expression",
    value: function arithmetic_expression(_p) {
      if (_p === undefined) {
        _p = 0;
      }

      var _parentctx = this._ctx;
      var _parentState = this.state;
      var localctx = new Arithmetic_expressionContext(this, this._ctx, _parentState);
      var _prevctx = localctx;
      var _startState = 8;
      this.enterRecursionRule(localctx, 8, logicspecParser.RULE_arithmetic_expression, _p);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;

        this._errHandler.sync(this);

        var la_ = this._interp.adaptivePredict(this._input, 5, this._ctx);

        switch (la_) {
          case 1:
            this.state = 74;
            this.match(logicspecParser.UNARY_BINARY_ARITHMETIC_OPERATOR);
            this.state = 75;
            this.arithmetic_expression(6);
            break;

          case 2:
            this.state = 76;
            this.match(logicspecParser.INT);
            this.state = 77;
            this.identifier();
            break;

          case 3:
            this.state = 78;
            this.match(logicspecParser.INT);
            this.state = 79;
            this.bracketed_arithmetic_expression();
            break;

          case 4:
            this.state = 80;
            this.bracketed_arithmetic_expression();
            break;

          case 5:
            this.state = 81;
            this.match(logicspecParser.INT);
            break;

          case 6:
            this.state = 82;
            this.identifier();
            break;
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 93;

        this._errHandler.sync(this);

        var _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);

        while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }

            _prevctx = localctx;
            this.state = 91;

            this._errHandler.sync(this);

            var la_ = this._interp.adaptivePredict(this._input, 6, this._ctx);

            switch (la_) {
              case 1:
                localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_arithmetic_expression);
                this.state = 85;

                if (!this.precpred(this._ctx, 8)) {
                  throw new _antlr["default"].error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                }

                this.state = 86;
                this.match(logicspecParser.ARITHMETIC_OPERATOR);
                this.state = 87;
                this.arithmetic_expression(9);
                break;

              case 2:
                localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_arithmetic_expression);
                this.state = 88;

                if (!this.precpred(this._ctx, 7)) {
                  throw new _antlr["default"].error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                }

                this.state = 89;
                this.match(logicspecParser.UNARY_BINARY_ARITHMETIC_OPERATOR);
                this.state = 90;
                this.arithmetic_expression(8);
                break;
            }
          }

          this.state = 95;

          this._errHandler.sync(this);

          _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
        }
      } catch (error) {
        if (error instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = error;

          this._errHandler.reportError(this, error);

          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }

      return localctx;
    }
  }, {
    key: "bracketed_arithmetic_expression",
    value: function bracketed_arithmetic_expression() {
      var localctx = new Bracketed_arithmetic_expressionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 10, logicspecParser.RULE_bracketed_arithmetic_expression);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(logicspecParser.T__0);
        this.state = 97;
        this.arithmetic_expression(0);
        this.state = 98;
        this.match(logicspecParser.T__1);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "predicate_call",
    value: function predicate_call() {
      var localctx = new Predicate_callContext(this, this._ctx, this.state);
      this.enterRule(localctx, 12, logicspecParser.RULE_predicate_call);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(logicspecParser.IDENTIFIER);
        this.state = 101;
        this.match(logicspecParser.T__0);
        this.state = 102;
        this.arithmetic_expression(0);
        this.state = 107;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        while (_la === logicspecParser.T__3) {
          this.state = 103;
          this.match(logicspecParser.T__3);
          this.state = 104;
          this.arithmetic_expression(0);
          this.state = 109;

          this._errHandler.sync(this);

          _la = this._input.LA(1);
        }

        this.state = 110;
        this.match(logicspecParser.T__1);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "indexed_accessor",
    value: function indexed_accessor() {
      var localctx = new Indexed_accessorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 14, logicspecParser.RULE_indexed_accessor);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(logicspecParser.IDENTIFIER);
        this.state = 113;
        this.match(logicspecParser.T__4);
        this.state = 114;
        this.match(logicspecParser.T__0);
        this.state = 115;
        this.arithmetic_expression(0);
        this.state = 116;
        this.match(logicspecParser.T__1);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "implies_block",
    value: function implies_block() {
      var localctx = new Implies_blockContext(this, this._ctx, this.state);
      this.enterRule(localctx, 16, logicspecParser.RULE_implies_block);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(logicspecParser.T__5);
        this.state = 119;
        this.logical_expression(0);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "for_all_block",
    value: function for_all_block() {
      var localctx = new For_all_blockContext(this, this._ctx, this.state);
      this.enterRule(localctx, 18, logicspecParser.RULE_for_all_block);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(logicspecParser.T__6);
        this.state = 122;
        this.match(logicspecParser.T__7);
        this.state = 123;
        this.identifier_list();
        this.state = 128;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        if (_la === logicspecParser.T__0) {
          this.state = 124;
          this.match(logicspecParser.T__0);
          this.state = 125;
          this.logical_expression(0);
          this.state = 126;
          this.match(logicspecParser.T__1);
        }

        this.state = 130;
        this.implies_block();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "exists_block",
    value: function exists_block() {
      var localctx = new Exists_blockContext(this, this._ctx, this.state);
      this.enterRule(localctx, 20, logicspecParser.RULE_exists_block);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(logicspecParser.T__8);
        this.state = 133;
        this.identifier_list();
        this.state = 138;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        if (_la === logicspecParser.T__0) {
          this.state = 134;
          this.match(logicspecParser.T__0);
          this.state = 135;
          this.logical_expression(0);
          this.state = 136;
          this.match(logicspecParser.T__1);
        }

        this.state = 140;
        this.implies_block();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "identifier_list",
    value: function identifier_list() {
      var localctx = new Identifier_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 22, logicspecParser.RULE_identifier_list);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        if (_la === logicspecParser.IDENTIFIER) {
          this.state = 142;
          this.identifier();
          this.state = 147;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while (_la === logicspecParser.T__3) {
            this.state = 143;
            this.match(logicspecParser.T__3);
            this.state = 144;
            this.identifier();
            this.state = 149;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }, {
    key: "identifier",
    value: function identifier() {
      var localctx = new IdentifierContext(this, this._ctx, this.state);
      this.enterRule(localctx, 24, logicspecParser.RULE_identifier);

      try {
        this.state = 154;

        this._errHandler.sync(this);

        var la_ = this._interp.adaptivePredict(this._input, 13, this._ctx);

        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 152;
            this.indexed_accessor();
            break;

          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.match(logicspecParser.IDENTIFIER);
            break;
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return localctx;
    }
  }]);

  return logicspecParser;
}(_antlr["default"].Parser);

exports["default"] = logicspecParser;

_defineProperty(logicspecParser, "grammarFileName", "logicspec.g4");

_defineProperty(logicspecParser, "literalNames", [null, "'('", "')'", "'==='", "','", "'_'", "'implies'", "'for'", "'all'", "'exists'", null, null, null, null, null, null, null, "'not'"]);

_defineProperty(logicspecParser, "symbolicNames", [null, null, null, null, null, null, null, null, null, null, "STRING_LITERAL", "DOUBLE_QUOTED_STRING_LITERAL", "UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL", "SINGLE_QUOTED_STRING_LITERAL", "UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL", "INT", "DIGIT", "UNARY_LOGICAL_OPERATOR", "LOGICAL_CONSTANT", "LOGICAL_OPERATOR", "RELATIONAL_OPERATOR", "UNARY_BINARY_ARITHMETIC_OPERATOR", "ARITHMETIC_OPERATOR", "IDENTIFIER", "WS", "LINE_COMMENT"]);

_defineProperty(logicspecParser, "ruleNames", ["file", "predicate", "logical_expression", "string_or_arithmetic_expression", "arithmetic_expression", "bracketed_arithmetic_expression", "predicate_call", "indexed_accessor", "implies_block", "for_all_block", "exists_block", "identifier_list", "identifier"]);

logicspecParser.EOF = _antlr["default"].Token.EOF;
logicspecParser.T__0 = 1;
logicspecParser.T__1 = 2;
logicspecParser.T__2 = 3;
logicspecParser.T__3 = 4;
logicspecParser.T__4 = 5;
logicspecParser.T__5 = 6;
logicspecParser.T__6 = 7;
logicspecParser.T__7 = 8;
logicspecParser.T__8 = 9;
logicspecParser.STRING_LITERAL = 10;
logicspecParser.DOUBLE_QUOTED_STRING_LITERAL = 11;
logicspecParser.UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL = 12;
logicspecParser.SINGLE_QUOTED_STRING_LITERAL = 13;
logicspecParser.UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL = 14;
logicspecParser.INT = 15;
logicspecParser.DIGIT = 16;
logicspecParser.UNARY_LOGICAL_OPERATOR = 17;
logicspecParser.LOGICAL_CONSTANT = 18;
logicspecParser.LOGICAL_OPERATOR = 19;
logicspecParser.RELATIONAL_OPERATOR = 20;
logicspecParser.UNARY_BINARY_ARITHMETIC_OPERATOR = 21;
logicspecParser.ARITHMETIC_OPERATOR = 22;
logicspecParser.IDENTIFIER = 23;
logicspecParser.WS = 24;
logicspecParser.LINE_COMMENT = 25;
logicspecParser.RULE_file = 0;
logicspecParser.RULE_predicate = 1;
logicspecParser.RULE_logical_expression = 2;
logicspecParser.RULE_string_or_arithmetic_expression = 3;
logicspecParser.RULE_arithmetic_expression = 4;
logicspecParser.RULE_bracketed_arithmetic_expression = 5;
logicspecParser.RULE_predicate_call = 6;
logicspecParser.RULE_indexed_accessor = 7;
logicspecParser.RULE_implies_block = 8;
logicspecParser.RULE_for_all_block = 9;
logicspecParser.RULE_exists_block = 10;
logicspecParser.RULE_identifier_list = 11;
logicspecParser.RULE_identifier = 12;

var FileContext = /*#__PURE__*/function (_antlr4$ParserRuleCon) {
  _inherits(FileContext, _antlr4$ParserRuleCon);

  var _super2 = _createSuper(FileContext);

  function FileContext(parser, parent, invokingState) {
    var _this2;

    _classCallCheck(this, FileContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this2 = _super2.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this2), "predicate", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(PredicateContext);
      } else {
        return this.getTypedRuleContext(PredicateContext, i);
      }
    });

    _this2.parser = parser;
    _this2.ruleIndex = logicspecParser.RULE_file;
    return _this2;
  }

  _createClass(FileContext, [{
    key: "EOF",
    value: function EOF() {
      return this.getToken(logicspecParser.EOF, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterFile(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitFile(this);
      }
    }
  }]);

  return FileContext;
}(_antlr["default"].ParserRuleContext);

var PredicateContext = /*#__PURE__*/function (_antlr4$ParserRuleCon2) {
  _inherits(PredicateContext, _antlr4$ParserRuleCon2);

  var _super3 = _createSuper(PredicateContext);

  function PredicateContext(parser, parent, invokingState) {
    var _this3;

    _classCallCheck(this, PredicateContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this3 = _super3.call(this, parent, invokingState);
    _this3.parser = parser;
    _this3.ruleIndex = logicspecParser.RULE_predicate;
    return _this3;
  }

  _createClass(PredicateContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(logicspecParser.IDENTIFIER, 0);
    }
  }, {
    key: "identifier_list",
    value: function identifier_list() {
      return this.getTypedRuleContext(Identifier_listContext, 0);
    }
  }, {
    key: "logical_expression",
    value: function logical_expression() {
      return this.getTypedRuleContext(Logical_expressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterPredicate(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitPredicate(this);
      }
    }
  }]);

  return PredicateContext;
}(_antlr["default"].ParserRuleContext);

var Logical_expressionContext = /*#__PURE__*/function (_antlr4$ParserRuleCon3) {
  _inherits(Logical_expressionContext, _antlr4$ParserRuleCon3);

  var _super4 = _createSuper(Logical_expressionContext);

  function Logical_expressionContext(parser, parent, invokingState) {
    var _this4;

    _classCallCheck(this, Logical_expressionContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this4 = _super4.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this4), "string_or_arithmetic_expression", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(String_or_arithmetic_expressionContext);
      } else {
        return this.getTypedRuleContext(String_or_arithmetic_expressionContext, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this4), "RELATIONAL_OPERATOR", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTokens(logicspecParser.RELATIONAL_OPERATOR);
      } else {
        return this.getToken(logicspecParser.RELATIONAL_OPERATOR, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this4), "logical_expression", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(Logical_expressionContext);
      } else {
        return this.getTypedRuleContext(Logical_expressionContext, i);
      }
    });

    _this4.parser = parser;
    _this4.ruleIndex = logicspecParser.RULE_logical_expression;
    return _this4;
  }

  _createClass(Logical_expressionContext, [{
    key: "UNARY_LOGICAL_OPERATOR",
    value: function UNARY_LOGICAL_OPERATOR() {
      return this.getToken(logicspecParser.UNARY_LOGICAL_OPERATOR, 0);
    }
  }, {
    key: "LOGICAL_CONSTANT",
    value: function LOGICAL_CONSTANT() {
      return this.getToken(logicspecParser.LOGICAL_CONSTANT, 0);
    }
  }, {
    key: "predicate_call",
    value: function predicate_call() {
      return this.getTypedRuleContext(Predicate_callContext, 0);
    }
  }, {
    key: "for_all_block",
    value: function for_all_block() {
      return this.getTypedRuleContext(For_all_blockContext, 0);
    }
  }, {
    key: "exists_block",
    value: function exists_block() {
      return this.getTypedRuleContext(Exists_blockContext, 0);
    }
  }, {
    key: "LOGICAL_OPERATOR",
    value: function LOGICAL_OPERATOR() {
      return this.getToken(logicspecParser.LOGICAL_OPERATOR, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterLogical_expression(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitLogical_expression(this);
      }
    }
  }]);

  return Logical_expressionContext;
}(_antlr["default"].ParserRuleContext);

var String_or_arithmetic_expressionContext = /*#__PURE__*/function (_antlr4$ParserRuleCon4) {
  _inherits(String_or_arithmetic_expressionContext, _antlr4$ParserRuleCon4);

  var _super5 = _createSuper(String_or_arithmetic_expressionContext);

  function String_or_arithmetic_expressionContext(parser, parent, invokingState) {
    var _this5;

    _classCallCheck(this, String_or_arithmetic_expressionContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this5 = _super5.call(this, parent, invokingState);
    _this5.parser = parser;
    _this5.ruleIndex = logicspecParser.RULE_string_or_arithmetic_expression;
    return _this5;
  }

  _createClass(String_or_arithmetic_expressionContext, [{
    key: "arithmetic_expression",
    value: function arithmetic_expression() {
      return this.getTypedRuleContext(Arithmetic_expressionContext, 0);
    }
  }, {
    key: "STRING_LITERAL",
    value: function STRING_LITERAL() {
      return this.getToken(logicspecParser.STRING_LITERAL, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterString_or_arithmetic_expression(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitString_or_arithmetic_expression(this);
      }
    }
  }]);

  return String_or_arithmetic_expressionContext;
}(_antlr["default"].ParserRuleContext);

var Arithmetic_expressionContext = /*#__PURE__*/function (_antlr4$ParserRuleCon5) {
  _inherits(Arithmetic_expressionContext, _antlr4$ParserRuleCon5);

  var _super6 = _createSuper(Arithmetic_expressionContext);

  function Arithmetic_expressionContext(parser, parent, invokingState) {
    var _this6;

    _classCallCheck(this, Arithmetic_expressionContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this6 = _super6.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this6), "arithmetic_expression", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(Arithmetic_expressionContext);
      } else {
        return this.getTypedRuleContext(Arithmetic_expressionContext, i);
      }
    });

    _this6.parser = parser;
    _this6.ruleIndex = logicspecParser.RULE_arithmetic_expression;
    return _this6;
  }

  _createClass(Arithmetic_expressionContext, [{
    key: "UNARY_BINARY_ARITHMETIC_OPERATOR",
    value: function UNARY_BINARY_ARITHMETIC_OPERATOR() {
      return this.getToken(logicspecParser.UNARY_BINARY_ARITHMETIC_OPERATOR, 0);
    }
  }, {
    key: "INT",
    value: function INT() {
      return this.getToken(logicspecParser.INT, 0);
    }
  }, {
    key: "identifier",
    value: function identifier() {
      return this.getTypedRuleContext(IdentifierContext, 0);
    }
  }, {
    key: "bracketed_arithmetic_expression",
    value: function bracketed_arithmetic_expression() {
      return this.getTypedRuleContext(Bracketed_arithmetic_expressionContext, 0);
    }
  }, {
    key: "ARITHMETIC_OPERATOR",
    value: function ARITHMETIC_OPERATOR() {
      return this.getToken(logicspecParser.ARITHMETIC_OPERATOR, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterArithmetic_expression(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitArithmetic_expression(this);
      }
    }
  }]);

  return Arithmetic_expressionContext;
}(_antlr["default"].ParserRuleContext);

var Bracketed_arithmetic_expressionContext = /*#__PURE__*/function (_antlr4$ParserRuleCon6) {
  _inherits(Bracketed_arithmetic_expressionContext, _antlr4$ParserRuleCon6);

  var _super7 = _createSuper(Bracketed_arithmetic_expressionContext);

  function Bracketed_arithmetic_expressionContext(parser, parent, invokingState) {
    var _this7;

    _classCallCheck(this, Bracketed_arithmetic_expressionContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this7 = _super7.call(this, parent, invokingState);
    _this7.parser = parser;
    _this7.ruleIndex = logicspecParser.RULE_bracketed_arithmetic_expression;
    return _this7;
  }

  _createClass(Bracketed_arithmetic_expressionContext, [{
    key: "arithmetic_expression",
    value: function arithmetic_expression() {
      return this.getTypedRuleContext(Arithmetic_expressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterBracketed_arithmetic_expression(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitBracketed_arithmetic_expression(this);
      }
    }
  }]);

  return Bracketed_arithmetic_expressionContext;
}(_antlr["default"].ParserRuleContext);

var Predicate_callContext = /*#__PURE__*/function (_antlr4$ParserRuleCon7) {
  _inherits(Predicate_callContext, _antlr4$ParserRuleCon7);

  var _super8 = _createSuper(Predicate_callContext);

  function Predicate_callContext(parser, parent, invokingState) {
    var _this8;

    _classCallCheck(this, Predicate_callContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this8 = _super8.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this8), "arithmetic_expression", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(Arithmetic_expressionContext);
      } else {
        return this.getTypedRuleContext(Arithmetic_expressionContext, i);
      }
    });

    _this8.parser = parser;
    _this8.ruleIndex = logicspecParser.RULE_predicate_call;
    return _this8;
  }

  _createClass(Predicate_callContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(logicspecParser.IDENTIFIER, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterPredicate_call(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitPredicate_call(this);
      }
    }
  }]);

  return Predicate_callContext;
}(_antlr["default"].ParserRuleContext);

var Indexed_accessorContext = /*#__PURE__*/function (_antlr4$ParserRuleCon8) {
  _inherits(Indexed_accessorContext, _antlr4$ParserRuleCon8);

  var _super9 = _createSuper(Indexed_accessorContext);

  function Indexed_accessorContext(parser, parent, invokingState) {
    var _this9;

    _classCallCheck(this, Indexed_accessorContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this9 = _super9.call(this, parent, invokingState);
    _this9.parser = parser;
    _this9.ruleIndex = logicspecParser.RULE_indexed_accessor;
    return _this9;
  }

  _createClass(Indexed_accessorContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(logicspecParser.IDENTIFIER, 0);
    }
  }, {
    key: "arithmetic_expression",
    value: function arithmetic_expression() {
      return this.getTypedRuleContext(Arithmetic_expressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterIndexed_accessor(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitIndexed_accessor(this);
      }
    }
  }]);

  return Indexed_accessorContext;
}(_antlr["default"].ParserRuleContext);

var Implies_blockContext = /*#__PURE__*/function (_antlr4$ParserRuleCon9) {
  _inherits(Implies_blockContext, _antlr4$ParserRuleCon9);

  var _super10 = _createSuper(Implies_blockContext);

  function Implies_blockContext(parser, parent, invokingState) {
    var _this10;

    _classCallCheck(this, Implies_blockContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this10 = _super10.call(this, parent, invokingState);
    _this10.parser = parser;
    _this10.ruleIndex = logicspecParser.RULE_implies_block;
    return _this10;
  }

  _createClass(Implies_blockContext, [{
    key: "logical_expression",
    value: function logical_expression() {
      return this.getTypedRuleContext(Logical_expressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterImplies_block(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitImplies_block(this);
      }
    }
  }]);

  return Implies_blockContext;
}(_antlr["default"].ParserRuleContext);

var For_all_blockContext = /*#__PURE__*/function (_antlr4$ParserRuleCon10) {
  _inherits(For_all_blockContext, _antlr4$ParserRuleCon10);

  var _super11 = _createSuper(For_all_blockContext);

  function For_all_blockContext(parser, parent, invokingState) {
    var _this11;

    _classCallCheck(this, For_all_blockContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this11 = _super11.call(this, parent, invokingState);
    _this11.parser = parser;
    _this11.ruleIndex = logicspecParser.RULE_for_all_block;
    return _this11;
  }

  _createClass(For_all_blockContext, [{
    key: "identifier_list",
    value: function identifier_list() {
      return this.getTypedRuleContext(Identifier_listContext, 0);
    }
  }, {
    key: "implies_block",
    value: function implies_block() {
      return this.getTypedRuleContext(Implies_blockContext, 0);
    }
  }, {
    key: "logical_expression",
    value: function logical_expression() {
      return this.getTypedRuleContext(Logical_expressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterFor_all_block(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitFor_all_block(this);
      }
    }
  }]);

  return For_all_blockContext;
}(_antlr["default"].ParserRuleContext);

var Exists_blockContext = /*#__PURE__*/function (_antlr4$ParserRuleCon11) {
  _inherits(Exists_blockContext, _antlr4$ParserRuleCon11);

  var _super12 = _createSuper(Exists_blockContext);

  function Exists_blockContext(parser, parent, invokingState) {
    var _this12;

    _classCallCheck(this, Exists_blockContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this12 = _super12.call(this, parent, invokingState);
    _this12.parser = parser;
    _this12.ruleIndex = logicspecParser.RULE_exists_block;
    return _this12;
  }

  _createClass(Exists_blockContext, [{
    key: "identifier_list",
    value: function identifier_list() {
      return this.getTypedRuleContext(Identifier_listContext, 0);
    }
  }, {
    key: "implies_block",
    value: function implies_block() {
      return this.getTypedRuleContext(Implies_blockContext, 0);
    }
  }, {
    key: "logical_expression",
    value: function logical_expression() {
      return this.getTypedRuleContext(Logical_expressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterExists_block(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitExists_block(this);
      }
    }
  }]);

  return Exists_blockContext;
}(_antlr["default"].ParserRuleContext);

var Identifier_listContext = /*#__PURE__*/function (_antlr4$ParserRuleCon12) {
  _inherits(Identifier_listContext, _antlr4$ParserRuleCon12);

  var _super13 = _createSuper(Identifier_listContext);

  function Identifier_listContext(parser, parent, invokingState) {
    var _this13;

    _classCallCheck(this, Identifier_listContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this13 = _super13.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this13), "identifier", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(IdentifierContext);
      } else {
        return this.getTypedRuleContext(IdentifierContext, i);
      }
    });

    _this13.parser = parser;
    _this13.ruleIndex = logicspecParser.RULE_identifier_list;
    return _this13;
  }

  _createClass(Identifier_listContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterIdentifier_list(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitIdentifier_list(this);
      }
    }
  }]);

  return Identifier_listContext;
}(_antlr["default"].ParserRuleContext);

var IdentifierContext = /*#__PURE__*/function (_antlr4$ParserRuleCon13) {
  _inherits(IdentifierContext, _antlr4$ParserRuleCon13);

  var _super14 = _createSuper(IdentifierContext);

  function IdentifierContext(parser, parent, invokingState) {
    var _this14;

    _classCallCheck(this, IdentifierContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this14 = _super14.call(this, parent, invokingState);
    _this14.parser = parser;
    _this14.ruleIndex = logicspecParser.RULE_identifier;
    return _this14;
  }

  _createClass(IdentifierContext, [{
    key: "indexed_accessor",
    value: function indexed_accessor() {
      return this.getTypedRuleContext(Indexed_accessorContext, 0);
    }
  }, {
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(logicspecParser.IDENTIFIER, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.enterIdentifier(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _logicspecListener["default"]) {
        listener.exitIdentifier(this);
      }
    }
  }]);

  return IdentifierContext;
}(_antlr["default"].ParserRuleContext);

logicspecParser.FileContext = FileContext;
logicspecParser.PredicateContext = PredicateContext;
logicspecParser.Logical_expressionContext = Logical_expressionContext;
logicspecParser.String_or_arithmetic_expressionContext = String_or_arithmetic_expressionContext;
logicspecParser.Arithmetic_expressionContext = Arithmetic_expressionContext;
logicspecParser.Bracketed_arithmetic_expressionContext = Bracketed_arithmetic_expressionContext;
logicspecParser.Predicate_callContext = Predicate_callContext;
logicspecParser.Indexed_accessorContext = Indexed_accessorContext;
logicspecParser.Implies_blockContext = Implies_blockContext;
logicspecParser.For_all_blockContext = For_all_blockContext;
logicspecParser.Exists_blockContext = Exists_blockContext;
logicspecParser.Identifier_listContext = Identifier_listContext;
logicspecParser.IdentifierContext = IdentifierContext;
module.exports = exports.default;