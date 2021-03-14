// Generated from logicspec.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import logicspecListener from './logicspecListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0018\u0096\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0007\u0002\u001c\n\u0002\f\u0002\u000e",
    "\u0002\u001f\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004.\n\u0004\r\u0004\u000e",
    "\u0004/\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004@\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004E\n\u0004\f\u0004\u000e\u0004H\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005R\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005W\n\u0005\f\u0005\u000e\u0005Z\u000b\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007e\n\u0007\f\u0007\u000e",
    "\u0007h\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n|\n\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u0086\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f",
    "\u0007\f\u008d\n\f\f\f\u000e\f\u0090\u000b\f\u0003\r\u0003\r\u0005\r",
    "\u0094\n\r\u0003\r\u0002\u0004\u0006\b\u000e\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u0002\u0002\u0002\u009c\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006?\u0003",
    "\u0002\u0002\u0002\bQ\u0003\u0002\u0002\u0002\n[\u0003\u0002\u0002\u0002",
    "\f_\u0003\u0002\u0002\u0002\u000ek\u0003\u0002\u0002\u0002\u0010q\u0003",
    "\u0002\u0002\u0002\u0012t\u0003\u0002\u0002\u0002\u0014\u007f\u0003",
    "\u0002\u0002\u0002\u0016\u0089\u0003\u0002\u0002\u0002\u0018\u0093\u0003",
    "\u0002\u0002\u0002\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0003",
    "\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 !\u0007\u0002",
    "\u0002\u0003!\u0003\u0003\u0002\u0002\u0002\"#\u0007\u0016\u0002\u0002",
    "#$\u0007\u0003\u0002\u0002$%\u0005\u0016\f\u0002%&\u0007\u0004\u0002",
    "\u0002&\'\u0007\u0005\u0002\u0002\'(\u0005\u0006\u0004\u0002(\u0005",
    "\u0003\u0002\u0002\u0002)*\b\u0004\u0001\u0002*-\u0005\b\u0005\u0002",
    "+,\u0007\u0014\u0002\u0002,.\u0005\b\u0005\u0002-+\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002",
    "\u0002\u00020@\u0003\u0002\u0002\u000212\u0005\b\u0005\u000223\u0007",
    "\u0014\u0002\u000234\u0007\f\u0002\u00024@\u0003\u0002\u0002\u00025",
    "6\u0007\f\u0002\u000267\u0007\u0014\u0002\u00027@\u0005\b\u0005\u0002",
    "89\u0007\u0003\u0002\u00029:\u0005\u0006\u0004\u0002:;\u0007\u0004\u0002",
    "\u0002;@\u0003\u0002\u0002\u0002<@\u0005\f\u0007\u0002=@\u0005\u0012",
    "\n\u0002>@\u0005\u0014\u000b\u0002?)\u0003\u0002\u0002\u0002?1\u0003",
    "\u0002\u0002\u0002?5\u0003\u0002\u0002\u0002?8\u0003\u0002\u0002\u0002",
    "?<\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?>\u0003\u0002\u0002",
    "\u0002@F\u0003\u0002\u0002\u0002AB\f\n\u0002\u0002BC\u0007\u0013\u0002",
    "\u0002CE\u0005\u0006\u0004\u000bDA\u0003\u0002\u0002\u0002EH\u0003\u0002",
    "\u0002\u0002FD\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002G\u0007",
    "\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002IJ\b\u0005\u0001\u0002",
    "JK\u0007\u0011\u0002\u0002KR\u0005\u0018\r\u0002LM\u0007\u0011\u0002",
    "\u0002MR\u0005\n\u0006\u0002NR\u0005\n\u0006\u0002OR\u0007\u0011\u0002",
    "\u0002PR\u0005\u0018\r\u0002QI\u0003\u0002\u0002\u0002QL\u0003\u0002",
    "\u0002\u0002QN\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QP\u0003",
    "\u0002\u0002\u0002RX\u0003\u0002\u0002\u0002ST\f\b\u0002\u0002TU\u0007",
    "\u0015\u0002\u0002UW\u0005\b\u0005\tVS\u0003\u0002\u0002\u0002WZ\u0003",
    "\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002",
    "Y\t\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\u0007\u0003",
    "\u0002\u0002\\]\u0005\b\u0005\u0002]^\u0007\u0004\u0002\u0002^\u000b",
    "\u0003\u0002\u0002\u0002_`\u0007\u0016\u0002\u0002`a\u0007\u0003\u0002",
    "\u0002af\u0005\b\u0005\u0002bc\u0007\u0006\u0002\u0002ce\u0005\b\u0005",
    "\u0002db\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002",
    "\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002\u0002hf\u0003",
    "\u0002\u0002\u0002ij\u0007\u0004\u0002\u0002j\r\u0003\u0002\u0002\u0002",
    "kl\u0007\u0016\u0002\u0002lm\u0007\u0007\u0002\u0002mn\u0007\u0003\u0002",
    "\u0002no\u0005\b\u0005\u0002op\u0007\u0004\u0002\u0002p\u000f\u0003",
    "\u0002\u0002\u0002qr\u0007\b\u0002\u0002rs\u0005\u0006\u0004\u0002s",
    "\u0011\u0003\u0002\u0002\u0002tu\u0007\t\u0002\u0002uv\u0007\n\u0002",
    "\u0002v{\u0005\u0016\f\u0002wx\u0007\u0003\u0002\u0002xy\u0005\u0006",
    "\u0004\u0002yz\u0007\u0004\u0002\u0002z|\u0003\u0002\u0002\u0002{w\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}~\u0005\u0010\t\u0002~\u0013\u0003\u0002\u0002\u0002\u007f\u0080\u0007",
    "\u000b\u0002\u0002\u0080\u0085\u0005\u0016\f\u0002\u0081\u0082\u0007",
    "\u0003\u0002\u0002\u0082\u0083\u0005\u0006\u0004\u0002\u0083\u0084\u0007",
    "\u0004\u0002\u0002\u0084\u0086\u0003\u0002\u0002\u0002\u0085\u0081\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0088\u0005\u0010\t\u0002\u0088\u0015\u0003",
    "\u0002\u0002\u0002\u0089\u008e\u0005\u0018\r\u0002\u008a\u008b\u0007",
    "\u0006\u0002\u0002\u008b\u008d\u0005\u0018\r\u0002\u008c\u008a\u0003",
    "\u0002\u0002\u0002\u008d\u0090\u0003\u0002\u0002\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0017\u0003",
    "\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0094\u0005",
    "\u000e\b\u0002\u0092\u0094\u0007\u0016\u0002\u0002\u0093\u0091\u0003",
    "\u0002\u0002\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u0019\u0003",
    "\u0002\u0002\u0002\r\u001d/?FQXf{\u0085\u008e\u0093"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class logicspecParser extends antlr4.Parser {

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
                         "exists_block", "identifier_list", "identifier" ];

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
    			return this.precpred(this._ctx, 6);
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
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===logicspecParser.IDENTIFIER) {
	            this.state = 24;
	            this.predicate();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(logicspecParser.EOF);
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
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
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
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 45; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Logical_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_logical_expression);
	                this.state = 63;
	                if (!( this.precpred(this._ctx, 8))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                }
	                this.state = 64;
	                this.match(logicspecParser.LOGICAL_OPERATOR);
	                this.state = 65;
	                this.logical_expression(9); 
	            }
	            this.state = 70;
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
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
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
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_arithmetic_expression);
	                this.state = 81;
	                if (!( this.precpred(this._ctx, 6))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                }
	                this.state = 82;
	                this.match(logicspecParser.ARITHMETIC_OPERATOR);
	                this.state = 83;
	                this.arithmetic_expression(7); 
	            }
	            this.state = 88;
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
	        this.state = 89;
	        this.match(logicspecParser.T__0);
	        this.state = 90;
	        this.arithmetic_expression(0);
	        this.state = 91;
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
	        this.state = 93;
	        this.match(logicspecParser.IDENTIFIER);
	        this.state = 94;
	        this.match(logicspecParser.T__0);
	        this.state = 95;
	        this.arithmetic_expression(0);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===logicspecParser.T__3) {
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
	        this.state = 111;
	        this.match(logicspecParser.T__5);
	        this.state = 112;
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
	        this.state = 114;
	        this.match(logicspecParser.T__6);
	        this.state = 115;
	        this.match(logicspecParser.T__7);
	        this.state = 116;
	        this.identifier_list();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===logicspecParser.T__0) {
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
	        this.state = 125;
	        this.match(logicspecParser.T__8);
	        this.state = 126;
	        this.identifier_list();
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===logicspecParser.T__0) {
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
	        this.state = 135;
	        this.identifier();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===logicspecParser.T__3) {
	            this.state = 136;
	            this.match(logicspecParser.T__3);
	            this.state = 137;
	            this.identifier();
	            this.state = 142;
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, logicspecParser.RULE_identifier);
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
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
logicspecParser.RULE_identifier = 11;

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

	EOF() {
	    return this.getToken(logicspecParser.EOF, 0);
	};

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

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	bracketed_arithmetic_expression() {
	    return this.getTypedRuleContext(Bracketed_arithmetic_expressionContext,0);
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

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
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



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_identifier;
    }

	indexed_accessor() {
	    return this.getTypedRuleContext(Indexed_accessorContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(logicspecParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitIdentifier(this);
		}
	}


}




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
