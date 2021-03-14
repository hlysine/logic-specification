// Generated from logicspec.g4 by ANTLR 4.9.2
// jshint ignore: start
const antlr4 = require('antlr4');
const logicspecListener = require('./logicspecListener.js');

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0018\u008f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0003\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0006\u0004*\n\u0004\r\u0004\u000e\u0004+\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004<\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004A\n\u0004",
    "\f\u0004\u000e\u0004D\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005O\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "T\n\u0005\f\u0005\u000e\u0005W\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007b\n\u0007\f\u0007\u000e\u0007e\u000b\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\ny\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0083\n\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u008a\n\f\f\f\u000e",
    "\f\u008d\u000b\f\u0003\f\u0002\u0004\u0006\b\r\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0002\u0002\u0002\u0096\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u0006;",
    "\u0003\u0002\u0002\u0002\bN\u0003\u0002\u0002\u0002\nX\u0003\u0002\u0002",
    "\u0002\f\\\u0003\u0002\u0002\u0002\u000eh\u0003\u0002\u0002\u0002\u0010",
    "n\u0003\u0002\u0002\u0002\u0012q\u0003\u0002\u0002\u0002\u0014|\u0003",
    "\u0002\u0002\u0002\u0016\u0086\u0003\u0002\u0002\u0002\u0018\u001a\u0005",
    "\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c\u0003\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0007\u0016\u0002\u0002\u001f \u0007",
    "\u0003\u0002\u0002 !\u0005\u0016\f\u0002!\"\u0007\u0004\u0002\u0002",
    "\"#\u0007\u0005\u0002\u0002#$\u0005\u0006\u0004\u0002$\u0005\u0003\u0002",
    "\u0002\u0002%&\b\u0004\u0001\u0002&)\u0005\b\u0005\u0002\'(\u0007\u0014",
    "\u0002\u0002(*\u0005\b\u0005\u0002)\'\u0003\u0002\u0002\u0002*+\u0003",
    "\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",<\u0003\u0002\u0002\u0002-.\u0005\b\u0005\u0002./\u0007\u0014\u0002",
    "\u0002/0\u0007\f\u0002\u00020<\u0003\u0002\u0002\u000212\u0007\f\u0002",
    "\u000223\u0007\u0014\u0002\u00023<\u0005\b\u0005\u000245\u0007\u0003",
    "\u0002\u000256\u0005\u0006\u0004\u000267\u0007\u0004\u0002\u00027<\u0003",
    "\u0002\u0002\u00028<\u0005\f\u0007\u00029<\u0005\u0012\n\u0002:<\u0005",
    "\u0014\u000b\u0002;%\u0003\u0002\u0002\u0002;-\u0003\u0002\u0002\u0002",
    ";1\u0003\u0002\u0002\u0002;4\u0003\u0002\u0002\u0002;8\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002<B\u0003\u0002",
    "\u0002\u0002=>\f\n\u0002\u0002>?\u0007\u0013\u0002\u0002?A\u0005\u0006",
    "\u0004\u000b@=\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003",
    "\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002C\u0007\u0003\u0002\u0002",
    "\u0002DB\u0003\u0002\u0002\u0002EF\b\u0005\u0001\u0002FG\u0007\u0011",
    "\u0002\u0002GO\u0007\u0016\u0002\u0002HI\u0007\u0011\u0002\u0002IO\u0005",
    "\n\u0006\u0002JO\u0005\n\u0006\u0002KO\u0007\u0011\u0002\u0002LO\u0005",
    "\u000e\b\u0002MO\u0007\u0016\u0002\u0002NE\u0003\u0002\u0002\u0002N",
    "H\u0003\u0002\u0002\u0002NJ\u0003\u0002\u0002\u0002NK\u0003\u0002\u0002",
    "\u0002NL\u0003\u0002\u0002\u0002NM\u0003\u0002\u0002\u0002OU\u0003\u0002",
    "\u0002\u0002PQ\f\t\u0002\u0002QR\u0007\u0015\u0002\u0002RT\u0005\b\u0005",
    "\nSP\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002V\t\u0003\u0002\u0002\u0002WU",
    "\u0003\u0002\u0002\u0002XY\u0007\u0003\u0002\u0002YZ\u0005\b\u0005\u0002",
    "Z[\u0007\u0004\u0002\u0002[\u000b\u0003\u0002\u0002\u0002\\]\u0007\u0016",
    "\u0002\u0002]^\u0007\u0003\u0002\u0002^c\u0005\b\u0005\u0002_`\u0007",
    "\u0006\u0002\u0002`b\u0005\b\u0005\u0002a_\u0003\u0002\u0002\u0002b",
    "e\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002",
    "\u0002df\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002fg\u0007\u0004",
    "\u0002\u0002g\r\u0003\u0002\u0002\u0002hi\u0007\u0016\u0002\u0002ij",
    "\u0007\u0007\u0002\u0002jk\u0007\u0003\u0002\u0002kl\u0005\b\u0005\u0002",
    "lm\u0007\u0004\u0002\u0002m\u000f\u0003\u0002\u0002\u0002no\u0007\b",
    "\u0002\u0002op\u0005\u0006\u0004\u0002p\u0011\u0003\u0002\u0002\u0002",
    "qr\u0007\t\u0002\u0002rs\u0007\n\u0002\u0002sx\u0005\u0016\f\u0002t",
    "u\u0007\u0003\u0002\u0002uv\u0005\u0006\u0004\u0002vw\u0007\u0004\u0002",
    "\u0002wy\u0003\u0002\u0002\u0002xt\u0003\u0002\u0002\u0002xy\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z{\u0005\u0010\t\u0002{\u0013",
    "\u0003\u0002\u0002\u0002|}\u0007\u000b\u0002\u0002}\u0082\u0005\u0016",
    "\f\u0002~\u007f\u0007\u0003\u0002\u0002\u007f\u0080\u0005\u0006\u0004",
    "\u0002\u0080\u0081\u0007\u0004\u0002\u0002\u0081\u0083\u0003\u0002\u0002",
    "\u0002\u0082~\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0085\u0005\u0010\t",
    "\u0002\u0085\u0015\u0003\u0002\u0002\u0002\u0086\u008b\u0007\u0016\u0002",
    "\u0002\u0087\u0088\u0007\u0006\u0002\u0002\u0088\u008a\u0007\u0016\u0002",
    "\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002",
    "\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002",
    "\u0002\u008c\u0017\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002",
    "\u0002\f\u001b+;BNUcx\u0082\u008b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

class logicspecParser extends antlr4.Parser {

    static grammarFileName = "logicspec.g4";
    static literalNames = [ null, "'('", "')'", "'==='", "','", "'_'", "'implies'",
                            "'for'", "'all'", "'exists'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null,
                             null, null, "STRING_LITERAL", "DOUBLE_QUOTED_STRING_LITERAL",
                             "UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL",
                             "SINGLE_QUOTED_STRING_LITERAL", "UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL",
                             "INT", "DIGIT", "LOGICAL_OPERATOR", "RELATIONAL_OPERATOR",
                             "ARITHMETIC_OPERATOR", "IDENTIFIER", "WS",
                             "LINE_COMMENT" ];
    static ruleNames = [ "file", "predicate", "logical_expression", "arithmetic_expression",
                         "bracketed_arithmetic_expression", "predicate_call",
                         "indexed_accessor", "implies_block", "for_all_block",
                         "exists_block", "identifier_list" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = logicspecParser.ruleNames;
        this.literalNames = logicspecParser.literalNames;
        this.symbolicNames = logicspecParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.logical_expression_sempred(localctx, predIndex);
    	case 3:
    	    		return this.arithmetic_expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    logical_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arithmetic_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, logicspecParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===logicspecParser.IDENTIFIER) {
	            this.state = 22;
	            this.predicate();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, logicspecParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(logicspecParser.IDENTIFIER);
	        this.state = 29;
	        this.match(logicspecParser.T__0);
	        this.state = 30;
	        this.identifier_list();
	        this.state = 31;
	        this.match(logicspecParser.T__1);
	        this.state = 32;
	        this.match(logicspecParser.T__2);
	        this.state = 33;
	        this.logical_expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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


	logical_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Logical_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, logicspecParser.RULE_logical_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 36;
	            this.arithmetic_expression(0);
	            this.state = 39;
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 37;
	            		this.match(logicspecParser.RELATIONAL_OPERATOR);
	            		this.state = 38;
	            		this.arithmetic_expression(0);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 41;
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            this.state = 43;
	            this.arithmetic_expression(0);
	            this.state = 44;
	            this.match(logicspecParser.RELATIONAL_OPERATOR);
	            this.state = 45;
	            this.match(logicspecParser.STRING_LITERAL);
	            break;

	        case 3:
	            this.state = 47;
	            this.match(logicspecParser.STRING_LITERAL);
	            this.state = 48;
	            this.match(logicspecParser.RELATIONAL_OPERATOR);
	            this.state = 49;
	            this.arithmetic_expression(0);
	            break;

	        case 4:
	            this.state = 50;
	            this.match(logicspecParser.T__0);
	            this.state = 51;
	            this.logical_expression(0);
	            this.state = 52;
	            this.match(logicspecParser.T__1);
	            break;

	        case 5:
	            this.state = 54;
	            this.predicate_call();
	            break;

	        case 6:
	            this.state = 55;
	            this.for_all_block();
	            break;

	        case 7:
	            this.state = 56;
	            this.exists_block();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Logical_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_logical_expression);
	                this.state = 59;
	                if (!( this.precpred(this._ctx, 8))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                }
	                this.state = 60;
	                this.match(logicspecParser.LOGICAL_OPERATOR);
	                this.state = 61;
	                this.logical_expression(9);
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	arithmetic_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Arithmetic_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, logicspecParser.RULE_arithmetic_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 68;
	            this.match(logicspecParser.INT);
	            this.state = 69;
	            this.match(logicspecParser.IDENTIFIER);
	            break;

	        case 2:
	            this.state = 70;
	            this.match(logicspecParser.INT);
	            this.state = 71;
	            this.bracketed_arithmetic_expression();
	            break;

	        case 3:
	            this.state = 72;
	            this.bracketed_arithmetic_expression();
	            break;

	        case 4:
	            this.state = 73;
	            this.match(logicspecParser.INT);
	            break;

	        case 5:
	            this.state = 74;
	            this.indexed_accessor();
	            break;

	        case 6:
	            this.state = 75;
	            this.match(logicspecParser.IDENTIFIER);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_arithmetic_expression);
	                this.state = 78;
	                if (!( this.precpred(this._ctx, 7))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                }
	                this.state = 79;
	                this.match(logicspecParser.ARITHMETIC_OPERATOR);
	                this.state = 80;
	                this.arithmetic_expression(8);
	            }
	            this.state = 85;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	bracketed_arithmetic_expression() {
	    let localctx = new Bracketed_arithmetic_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, logicspecParser.RULE_bracketed_arithmetic_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(logicspecParser.T__0);
	        this.state = 87;
	        this.arithmetic_expression(0);
	        this.state = 88;
	        this.match(logicspecParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	predicate_call() {
	    let localctx = new Predicate_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, logicspecParser.RULE_predicate_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(logicspecParser.IDENTIFIER);
	        this.state = 91;
	        this.match(logicspecParser.T__0);
	        this.state = 92;
	        this.arithmetic_expression(0);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===logicspecParser.T__3) {
	            this.state = 93;
	            this.match(logicspecParser.T__3);
	            this.state = 94;
	            this.arithmetic_expression(0);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(logicspecParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	indexed_accessor() {
	    let localctx = new Indexed_accessorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, logicspecParser.RULE_indexed_accessor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(logicspecParser.IDENTIFIER);
	        this.state = 103;
	        this.match(logicspecParser.T__4);
	        this.state = 104;
	        this.match(logicspecParser.T__0);
	        this.state = 105;
	        this.arithmetic_expression(0);
	        this.state = 106;
	        this.match(logicspecParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	implies_block() {
	    let localctx = new Implies_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, logicspecParser.RULE_implies_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(logicspecParser.T__5);
	        this.state = 109;
	        this.logical_expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	for_all_block() {
	    let localctx = new For_all_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, logicspecParser.RULE_for_all_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(logicspecParser.T__6);
	        this.state = 112;
	        this.match(logicspecParser.T__7);
	        this.state = 113;
	        this.identifier_list();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===logicspecParser.T__0) {
	            this.state = 114;
	            this.match(logicspecParser.T__0);
	            this.state = 115;
	            this.logical_expression(0);
	            this.state = 116;
	            this.match(logicspecParser.T__1);
	        }

	        this.state = 120;
	        this.implies_block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	exists_block() {
	    let localctx = new Exists_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, logicspecParser.RULE_exists_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(logicspecParser.T__8);
	        this.state = 123;
	        this.identifier_list();
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===logicspecParser.T__0) {
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
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	identifier_list() {
	    let localctx = new Identifier_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, logicspecParser.RULE_identifier_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(logicspecParser.IDENTIFIER);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===logicspecParser.T__3) {
	            this.state = 133;
	            this.match(logicspecParser.T__3);
	            this.state = 134;
	            this.match(logicspecParser.IDENTIFIER);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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


}

logicspecParser.EOF = antlr4.Token.EOF;
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

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_file;
    }

	predicate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredicateContext);
	    } else {
	        return this.getTypedRuleContext(PredicateContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitFile(this);
		}
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_predicate;
    }

	IDENTIFIER() {
	    return this.getToken(logicspecParser.IDENTIFIER, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	logical_expression() {
	    return this.getTypedRuleContext(Logical_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitPredicate(this);
		}
	}


}



class Logical_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_logical_expression;
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	RELATIONAL_OPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(logicspecParser.RELATIONAL_OPERATOR);
	    } else {
	        return this.getToken(logicspecParser.RELATIONAL_OPERATOR, i);
	    }
	};


	STRING_LITERAL() {
	    return this.getToken(logicspecParser.STRING_LITERAL, 0);
	};

	logical_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Logical_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Logical_expressionContext,i);
	    }
	};

	predicate_call() {
	    return this.getTypedRuleContext(Predicate_callContext,0);
	};

	for_all_block() {
	    return this.getTypedRuleContext(For_all_blockContext,0);
	};

	exists_block() {
	    return this.getTypedRuleContext(Exists_blockContext,0);
	};

	LOGICAL_OPERATOR() {
	    return this.getToken(logicspecParser.LOGICAL_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterLogical_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitLogical_expression(this);
		}
	}


}



class Arithmetic_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_arithmetic_expression;
    }

	INT() {
	    return this.getToken(logicspecParser.INT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(logicspecParser.IDENTIFIER, 0);
	};

	bracketed_arithmetic_expression() {
	    return this.getTypedRuleContext(Bracketed_arithmetic_expressionContext,0);
	};

	indexed_accessor() {
	    return this.getTypedRuleContext(Indexed_accessorContext,0);
	};

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	ARITHMETIC_OPERATOR() {
	    return this.getToken(logicspecParser.ARITHMETIC_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterArithmetic_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitArithmetic_expression(this);
		}
	}


}



class Bracketed_arithmetic_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_bracketed_arithmetic_expression;
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterBracketed_arithmetic_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitBracketed_arithmetic_expression(this);
		}
	}


}



class Predicate_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_predicate_call;
    }

	IDENTIFIER() {
	    return this.getToken(logicspecParser.IDENTIFIER, 0);
	};

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterPredicate_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitPredicate_call(this);
		}
	}


}



class Indexed_accessorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_indexed_accessor;
    }

	IDENTIFIER() {
	    return this.getToken(logicspecParser.IDENTIFIER, 0);
	};

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterIndexed_accessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitIndexed_accessor(this);
		}
	}


}



class Implies_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_implies_block;
    }

	logical_expression() {
	    return this.getTypedRuleContext(Logical_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterImplies_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitImplies_block(this);
		}
	}


}



class For_all_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_for_all_block;
    }

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	implies_block() {
	    return this.getTypedRuleContext(Implies_blockContext,0);
	};

	logical_expression() {
	    return this.getTypedRuleContext(Logical_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterFor_all_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitFor_all_block(this);
		}
	}


}



class Exists_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_exists_block;
    }

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	implies_block() {
	    return this.getTypedRuleContext(Implies_blockContext,0);
	};

	logical_expression() {
	    return this.getTypedRuleContext(Logical_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterExists_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitExists_block(this);
		}
	}


}



class Identifier_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_identifier_list;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(logicspecParser.IDENTIFIER);
	    } else {
	        return this.getToken(logicspecParser.IDENTIFIER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterIdentifier_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitIdentifier_list(this);
		}
	}


}



module.exports = logicspecParser;
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
