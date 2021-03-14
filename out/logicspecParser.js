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

var serializedATN = ["\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786", "\u5964\x03\x18\x96\x04\x02\t\x02\x04\x03\t\x03\x04", "\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t", "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04", "\f\t\f\x04\r\t\r\x03\x02\x07\x02\x1C\n\x02\f\x02\x0E", "\x02\x1F\x0B\x02\x03\x02\x03\x02\x03\x03\x03\x03", "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04", "\x03\x04\x03\x04\x03\x04\x06\x04.\n\x04\r\x04\x0E", "\x04/\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04", "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04", "\x03\x04\x03\x04\x03\x04\x05\x04@\n\x04\x03\x04", "\x03\x04\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\x0B", "\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03", "\x05\x03\x05\x03\x05\x05\x05R\n\x05\x03\x05\x03", "\x05\x03\x05\x07\x05W\n\x05\f\x05\x0E\x05Z\x0B\x05", "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07", "\x03\x07\x03\x07\x03\x07\x07\x07e\n\x07\f\x07\x0E", "\x07h\x0B\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b", "\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03", "\n\x03\n\x03\n\x03\n\x03\n\x05\n|\n\n\x03\n\x03\n\x03", "\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x05", "\x0B\x86\n\x0B\x03\x0B\x03\x0B\x03\f\x03\f\x03\f", "\x07\f\x8D\n\f\f\f\x0E\f\x90\x0B\f\x03\r\x03\r\x05\r", "\x94\n\r\x03\r\x02\x04\x06\b\x0E\x02\x04\x06\b\n\f", "\x0E\x10\x12\x14\x16\x18\x02\x02\x02\x9C\x02\x1D", "\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06?\x03", "\x02\x02\x02\bQ\x03\x02\x02\x02\n[\x03\x02\x02\x02", "\f_\x03\x02\x02\x02\x0Ek\x03\x02\x02\x02\x10q\x03", "\x02\x02\x02\x12t\x03\x02\x02\x02\x14\x7F\x03", "\x02\x02\x02\x16\x89\x03\x02\x02\x02\x18\x93\x03", "\x02\x02\x02\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03", "\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03", "\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03", "\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07\x02", "\x02\x03!\x03\x03\x02\x02\x02\"#\x07\x16\x02\x02", "#$\x07\x03\x02\x02$%\x05\x16\f\x02%&\x07\x04\x02", "\x02&'\x07\x05\x02\x02'(\x05\x06\x04\x02(\x05", "\x03\x02\x02\x02)*\b\x04\x01\x02*-\x05\b\x05\x02", "+,\x07\x14\x02\x02,.\x05\b\x05\x02-+\x03\x02\x02", "\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02", "\x02\x020@\x03\x02\x02\x0212\x05\b\x05\x0223\x07", "\x14\x02\x0234\x07\f\x02\x024@\x03\x02\x02\x025", "6\x07\f\x02\x0267\x07\x14\x02\x027@\x05\b\x05\x02", "89\x07\x03\x02\x029:\x05\x06\x04\x02:;\x07\x04\x02", "\x02;@\x03\x02\x02\x02<@\x05\f\x07\x02=@\x05\x12", "\n\x02>@\x05\x14\x0B\x02?)\x03\x02\x02\x02?1\x03", "\x02\x02\x02?5\x03\x02\x02\x02?8\x03\x02\x02\x02", "?<\x03\x02\x02\x02?=\x03\x02\x02\x02?>\x03\x02\x02", "\x02@F\x03\x02\x02\x02AB\f\n\x02\x02BC\x07\x13\x02", "\x02CE\x05\x06\x04\x0BDA\x03\x02\x02\x02EH\x03\x02", "\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02G\x07", "\x03\x02\x02\x02HF\x03\x02\x02\x02IJ\b\x05\x01\x02", "JK\x07\x11\x02\x02KR\x05\x18\r\x02LM\x07\x11\x02", "\x02MR\x05\n\x06\x02NR\x05\n\x06\x02OR\x07\x11\x02", "\x02PR\x05\x18\r\x02QI\x03\x02\x02\x02QL\x03\x02", "\x02\x02QN\x03\x02\x02\x02QO\x03\x02\x02\x02QP\x03", "\x02\x02\x02RX\x03\x02\x02\x02ST\f\b\x02\x02TU\x07", "\x15\x02\x02UW\x05\b\x05\tVS\x03\x02\x02\x02WZ\x03", "\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02", "Y\t\x03\x02\x02\x02ZX\x03\x02\x02\x02[\\\x07\x03", "\x02\x02\\]\x05\b\x05\x02]^\x07\x04\x02\x02^\x0B", "\x03\x02\x02\x02_`\x07\x16\x02\x02`a\x07\x03\x02", "\x02af\x05\b\x05\x02bc\x07\x06\x02\x02ce\x05\b\x05", "\x02db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02", "\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03", "\x02\x02\x02ij\x07\x04\x02\x02j\r\x03\x02\x02\x02", "kl\x07\x16\x02\x02lm\x07\x07\x02\x02mn\x07\x03\x02", "\x02no\x05\b\x05\x02op\x07\x04\x02\x02p\x0F\x03", "\x02\x02\x02qr\x07\b\x02\x02rs\x05\x06\x04\x02s", "\x11\x03\x02\x02\x02tu\x07\t\x02\x02uv\x07\n\x02", "\x02v{\x05\x16\f\x02wx\x07\x03\x02\x02xy\x05\x06", "\x04\x02yz\x07\x04\x02\x02z|\x03\x02\x02\x02{w\x03", "\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02", "}~\x05\x10\t\x02~\x13\x03\x02\x02\x02\x7F\x80\x07", "\x0B\x02\x02\x80\x85\x05\x16\f\x02\x81\x82\x07", "\x03\x02\x02\x82\x83\x05\x06\x04\x02\x83\x84\x07", "\x04\x02\x02\x84\x86\x03\x02\x02\x02\x85\x81\x03", "\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03", "\x02\x02\x02\x87\x88\x05\x10\t\x02\x88\x15\x03", "\x02\x02\x02\x89\x8E\x05\x18\r\x02\x8A\x8B\x07", "\x06\x02\x02\x8B\x8D\x05\x18\r\x02\x8C\x8A\x03", "\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03", "\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x17\x03", "\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x94\x05", "\x0E\b\x02\x92\x94\x07\x16\x02\x02\x93\x91\x03", "\x02\x02\x02\x93\x92\x03\x02\x02\x02\x94\x19\x03", "\x02\x02\x02\r\x1D/?FQXf{\x85\x8E\x93"].join("");
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

        case 3:
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
          return this.precpred(this._ctx, 6);

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
        this.state = 27;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        while (_la === logicspecParser.IDENTIFIER) {
          this.state = 24;
          this.predicate();
          this.state = 29;

          this._errHandler.sync(this);

          _la = this._input.LA(1);
        }

        this.state = 30;
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
        this.state = 32;
        this.match(logicspecParser.IDENTIFIER);
        this.state = 33;
        this.match(logicspecParser.T__0);
        this.state = 34;
        this.identifier_list();
        this.state = 35;
        this.match(logicspecParser.T__1);
        this.state = 36;
        this.match(logicspecParser.T__2);
        this.state = 37;
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
        this.state = 61;

        this._errHandler.sync(this);

        var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);

        switch (la_) {
          case 1:
            this.state = 40;
            this.arithmetic_expression(0);
            this.state = 43;

            this._errHandler.sync(this);

            var _alt = 1;

            do {
              switch (_alt) {
                case 1:
                  this.state = 41;
                  this.match(logicspecParser.RELATIONAL_OPERATOR);
                  this.state = 42;
                  this.arithmetic_expression(0);
                  break;

                default:
                  throw new _antlr["default"].error.NoViableAltException(this);
              }

              this.state = 45;

              this._errHandler.sync(this);

              _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
            } while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER);

            break;

          case 2:
            this.state = 47;
            this.arithmetic_expression(0);
            this.state = 48;
            this.match(logicspecParser.RELATIONAL_OPERATOR);
            this.state = 49;
            this.match(logicspecParser.STRING_LITERAL);
            break;

          case 3:
            this.state = 51;
            this.match(logicspecParser.STRING_LITERAL);
            this.state = 52;
            this.match(logicspecParser.RELATIONAL_OPERATOR);
            this.state = 53;
            this.arithmetic_expression(0);
            break;

          case 4:
            this.state = 54;
            this.match(logicspecParser.T__0);
            this.state = 55;
            this.logical_expression(0);
            this.state = 56;
            this.match(logicspecParser.T__1);
            break;

          case 5:
            this.state = 58;
            this.predicate_call();
            break;

          case 6:
            this.state = 59;
            this.for_all_block();
            break;

          case 7:
            this.state = 60;
            this.exists_block();
            break;
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 68;

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
            this.state = 63;

            if (!this.precpred(this._ctx, 8)) {
              throw new _antlr["default"].error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
            }

            this.state = 64;
            this.match(logicspecParser.LOGICAL_OPERATOR);
            this.state = 65;
            this.logical_expression(9);
          }

          this.state = 70;

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
    key: "arithmetic_expression",
    value: function arithmetic_expression(_p) {
      if (_p === undefined) {
        _p = 0;
      }

      var _parentctx = this._ctx;
      var _parentState = this.state;
      var localctx = new Arithmetic_expressionContext(this, this._ctx, _parentState);
      var _prevctx = localctx;
      var _startState = 6;
      this.enterRecursionRule(localctx, 6, logicspecParser.RULE_arithmetic_expression, _p);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;

        this._errHandler.sync(this);

        var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);

        switch (la_) {
          case 1:
            this.state = 72;
            this.match(logicspecParser.INT);
            this.state = 73;
            this.identifier();
            break;

          case 2:
            this.state = 74;
            this.match(logicspecParser.INT);
            this.state = 75;
            this.bracketed_arithmetic_expression();
            break;

          case 3:
            this.state = 76;
            this.bracketed_arithmetic_expression();
            break;

          case 4:
            this.state = 77;
            this.match(logicspecParser.INT);
            break;

          case 5:
            this.state = 78;
            this.identifier();
            break;
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 86;

        this._errHandler.sync(this);

        var _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);

        while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }

            _prevctx = localctx;
            localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_arithmetic_expression);
            this.state = 81;

            if (!this.precpred(this._ctx, 6)) {
              throw new _antlr["default"].error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
            }

            this.state = 82;
            this.match(logicspecParser.ARITHMETIC_OPERATOR);
            this.state = 83;
            this.arithmetic_expression(7);
          }

          this.state = 88;

          this._errHandler.sync(this);

          _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
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
      this.enterRule(localctx, 8, logicspecParser.RULE_bracketed_arithmetic_expression);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(logicspecParser.T__0);
        this.state = 90;
        this.arithmetic_expression(0);
        this.state = 91;
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
      this.enterRule(localctx, 10, logicspecParser.RULE_predicate_call);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(logicspecParser.IDENTIFIER);
        this.state = 94;
        this.match(logicspecParser.T__0);
        this.state = 95;
        this.arithmetic_expression(0);
        this.state = 100;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        while (_la === logicspecParser.T__3) {
          this.state = 96;
          this.match(logicspecParser.T__3);
          this.state = 97;
          this.arithmetic_expression(0);
          this.state = 102;

          this._errHandler.sync(this);

          _la = this._input.LA(1);
        }

        this.state = 103;
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
      this.enterRule(localctx, 12, logicspecParser.RULE_indexed_accessor);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(logicspecParser.IDENTIFIER);
        this.state = 106;
        this.match(logicspecParser.T__4);
        this.state = 107;
        this.match(logicspecParser.T__0);
        this.state = 108;
        this.arithmetic_expression(0);
        this.state = 109;
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
      this.enterRule(localctx, 14, logicspecParser.RULE_implies_block);

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(logicspecParser.T__5);
        this.state = 112;
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
      this.enterRule(localctx, 16, logicspecParser.RULE_for_all_block);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(logicspecParser.T__6);
        this.state = 115;
        this.match(logicspecParser.T__7);
        this.state = 116;
        this.identifier_list();
        this.state = 121;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        if (_la === logicspecParser.T__0) {
          this.state = 117;
          this.match(logicspecParser.T__0);
          this.state = 118;
          this.logical_expression(0);
          this.state = 119;
          this.match(logicspecParser.T__1);
        }

        this.state = 123;
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
      this.enterRule(localctx, 18, logicspecParser.RULE_exists_block);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(logicspecParser.T__8);
        this.state = 126;
        this.identifier_list();
        this.state = 131;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        if (_la === logicspecParser.T__0) {
          this.state = 127;
          this.match(logicspecParser.T__0);
          this.state = 128;
          this.logical_expression(0);
          this.state = 129;
          this.match(logicspecParser.T__1);
        }

        this.state = 133;
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
      this.enterRule(localctx, 20, logicspecParser.RULE_identifier_list);
      var _la = 0; // Token type

      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.identifier();
        this.state = 140;

        this._errHandler.sync(this);

        _la = this._input.LA(1);

        while (_la === logicspecParser.T__3) {
          this.state = 136;
          this.match(logicspecParser.T__3);
          this.state = 137;
          this.identifier();
          this.state = 142;

          this._errHandler.sync(this);

          _la = this._input.LA(1);
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
      this.enterRule(localctx, 22, logicspecParser.RULE_identifier);

      try {
        this.state = 145;

        this._errHandler.sync(this);

        var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);

        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.indexed_accessor();
            break;

          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
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

_defineProperty(logicspecParser, "literalNames", [null, "'('", "')'", "'==='", "','", "'_'", "'implies'", "'for'", "'all'", "'exists'"]);

_defineProperty(logicspecParser, "symbolicNames", [null, null, null, null, null, null, null, null, null, null, "STRING_LITERAL", "DOUBLE_QUOTED_STRING_LITERAL", "UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL", "SINGLE_QUOTED_STRING_LITERAL", "UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL", "INT", "DIGIT", "LOGICAL_OPERATOR", "RELATIONAL_OPERATOR", "ARITHMETIC_OPERATOR", "IDENTIFIER", "WS", "LINE_COMMENT"]);

_defineProperty(logicspecParser, "ruleNames", ["file", "predicate", "logical_expression", "arithmetic_expression", "bracketed_arithmetic_expression", "predicate_call", "indexed_accessor", "implies_block", "for_all_block", "exists_block", "identifier_list", "identifier"]);

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
logicspecParser.LOGICAL_OPERATOR = 17;
logicspecParser.RELATIONAL_OPERATOR = 18;
logicspecParser.ARITHMETIC_OPERATOR = 19;
logicspecParser.IDENTIFIER = 20;
logicspecParser.WS = 21;
logicspecParser.LINE_COMMENT = 22;
logicspecParser.RULE_file = 0;
logicspecParser.RULE_predicate = 1;
logicspecParser.RULE_logical_expression = 2;
logicspecParser.RULE_arithmetic_expression = 3;
logicspecParser.RULE_bracketed_arithmetic_expression = 4;
logicspecParser.RULE_predicate_call = 5;
logicspecParser.RULE_indexed_accessor = 6;
logicspecParser.RULE_implies_block = 7;
logicspecParser.RULE_for_all_block = 8;
logicspecParser.RULE_exists_block = 9;
logicspecParser.RULE_identifier_list = 10;
logicspecParser.RULE_identifier = 11;

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

    _defineProperty(_assertThisInitialized(_this4), "arithmetic_expression", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(Arithmetic_expressionContext);
      } else {
        return this.getTypedRuleContext(Arithmetic_expressionContext, i);
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
    key: "STRING_LITERAL",
    value: function STRING_LITERAL() {
      return this.getToken(logicspecParser.STRING_LITERAL, 0);
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

var Arithmetic_expressionContext = /*#__PURE__*/function (_antlr4$ParserRuleCon4) {
  _inherits(Arithmetic_expressionContext, _antlr4$ParserRuleCon4);

  var _super5 = _createSuper(Arithmetic_expressionContext);

  function Arithmetic_expressionContext(parser, parent, invokingState) {
    var _this5;

    _classCallCheck(this, Arithmetic_expressionContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this5 = _super5.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this5), "arithmetic_expression", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(Arithmetic_expressionContext);
      } else {
        return this.getTypedRuleContext(Arithmetic_expressionContext, i);
      }
    });

    _this5.parser = parser;
    _this5.ruleIndex = logicspecParser.RULE_arithmetic_expression;
    return _this5;
  }

  _createClass(Arithmetic_expressionContext, [{
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

var Bracketed_arithmetic_expressionContext = /*#__PURE__*/function (_antlr4$ParserRuleCon5) {
  _inherits(Bracketed_arithmetic_expressionContext, _antlr4$ParserRuleCon5);

  var _super6 = _createSuper(Bracketed_arithmetic_expressionContext);

  function Bracketed_arithmetic_expressionContext(parser, parent, invokingState) {
    var _this6;

    _classCallCheck(this, Bracketed_arithmetic_expressionContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this6 = _super6.call(this, parent, invokingState);
    _this6.parser = parser;
    _this6.ruleIndex = logicspecParser.RULE_bracketed_arithmetic_expression;
    return _this6;
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

var Predicate_callContext = /*#__PURE__*/function (_antlr4$ParserRuleCon6) {
  _inherits(Predicate_callContext, _antlr4$ParserRuleCon6);

  var _super7 = _createSuper(Predicate_callContext);

  function Predicate_callContext(parser, parent, invokingState) {
    var _this7;

    _classCallCheck(this, Predicate_callContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this7 = _super7.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this7), "arithmetic_expression", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(Arithmetic_expressionContext);
      } else {
        return this.getTypedRuleContext(Arithmetic_expressionContext, i);
      }
    });

    _this7.parser = parser;
    _this7.ruleIndex = logicspecParser.RULE_predicate_call;
    return _this7;
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

var Indexed_accessorContext = /*#__PURE__*/function (_antlr4$ParserRuleCon7) {
  _inherits(Indexed_accessorContext, _antlr4$ParserRuleCon7);

  var _super8 = _createSuper(Indexed_accessorContext);

  function Indexed_accessorContext(parser, parent, invokingState) {
    var _this8;

    _classCallCheck(this, Indexed_accessorContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this8 = _super8.call(this, parent, invokingState);
    _this8.parser = parser;
    _this8.ruleIndex = logicspecParser.RULE_indexed_accessor;
    return _this8;
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

var Implies_blockContext = /*#__PURE__*/function (_antlr4$ParserRuleCon8) {
  _inherits(Implies_blockContext, _antlr4$ParserRuleCon8);

  var _super9 = _createSuper(Implies_blockContext);

  function Implies_blockContext(parser, parent, invokingState) {
    var _this9;

    _classCallCheck(this, Implies_blockContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this9 = _super9.call(this, parent, invokingState);
    _this9.parser = parser;
    _this9.ruleIndex = logicspecParser.RULE_implies_block;
    return _this9;
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

var For_all_blockContext = /*#__PURE__*/function (_antlr4$ParserRuleCon9) {
  _inherits(For_all_blockContext, _antlr4$ParserRuleCon9);

  var _super10 = _createSuper(For_all_blockContext);

  function For_all_blockContext(parser, parent, invokingState) {
    var _this10;

    _classCallCheck(this, For_all_blockContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this10 = _super10.call(this, parent, invokingState);
    _this10.parser = parser;
    _this10.ruleIndex = logicspecParser.RULE_for_all_block;
    return _this10;
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

var Exists_blockContext = /*#__PURE__*/function (_antlr4$ParserRuleCon10) {
  _inherits(Exists_blockContext, _antlr4$ParserRuleCon10);

  var _super11 = _createSuper(Exists_blockContext);

  function Exists_blockContext(parser, parent, invokingState) {
    var _this11;

    _classCallCheck(this, Exists_blockContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this11 = _super11.call(this, parent, invokingState);
    _this11.parser = parser;
    _this11.ruleIndex = logicspecParser.RULE_exists_block;
    return _this11;
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

var Identifier_listContext = /*#__PURE__*/function (_antlr4$ParserRuleCon11) {
  _inherits(Identifier_listContext, _antlr4$ParserRuleCon11);

  var _super12 = _createSuper(Identifier_listContext);

  function Identifier_listContext(parser, parent, invokingState) {
    var _this12;

    _classCallCheck(this, Identifier_listContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this12 = _super12.call(this, parent, invokingState);

    _defineProperty(_assertThisInitialized(_this12), "identifier", function (i) {
      if (i === undefined) {
        i = null;
      }

      if (i === null) {
        return this.getTypedRuleContexts(IdentifierContext);
      } else {
        return this.getTypedRuleContext(IdentifierContext, i);
      }
    });

    _this12.parser = parser;
    _this12.ruleIndex = logicspecParser.RULE_identifier_list;
    return _this12;
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

var IdentifierContext = /*#__PURE__*/function (_antlr4$ParserRuleCon12) {
  _inherits(IdentifierContext, _antlr4$ParserRuleCon12);

  var _super13 = _createSuper(IdentifierContext);

  function IdentifierContext(parser, parent, invokingState) {
    var _this13;

    _classCallCheck(this, IdentifierContext);

    if (parent === undefined) {
      parent = null;
    }

    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }

    _this13 = _super13.call(this, parent, invokingState);
    _this13.parser = parser;
    _this13.ruleIndex = logicspecParser.RULE_identifier;
    return _this13;
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