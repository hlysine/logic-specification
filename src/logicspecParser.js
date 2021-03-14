// Generated from logicspec.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import logicspecListener from './logicspecListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001b\u009f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e",
    "\n\u0002\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u00040",
    "\n\u0004\r\u0004\u000e\u00041\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004>\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004C\n\u0004\f\u0004\u000e\u0004F\u000b\u0004\u0003\u0005\u0003\u0005",
    "\u0005\u0005J\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006V\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006^\n\u0006\f\u0006\u000e\u0006a\u000b",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\bl\n\b\f\b\u000e\bo\u000b\b\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u0083\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u008d",
    "\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0007\r\u0094\n\r\f\r\u000e",
    "\r\u0097\u000b\r\u0005\r\u0099\n\r\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u009d\n\u000e\u0003\u000e\u0002\u0004\u0006\n\u000f\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0002\u0002\u00a8",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0004$\u0003\u0002\u0002\u0002",
    "\u0006=\u0003\u0002\u0002\u0002\bI\u0003\u0002\u0002\u0002\nU\u0003",
    "\u0002\u0002\u0002\fb\u0003\u0002\u0002\u0002\u000ef\u0003\u0002\u0002",
    "\u0002\u0010r\u0003\u0002\u0002\u0002\u0012x\u0003\u0002\u0002\u0002",
    "\u0014{\u0003\u0002\u0002\u0002\u0016\u0086\u0003\u0002\u0002\u0002",
    "\u0018\u0098\u0003\u0002\u0002\u0002\u001a\u009c\u0003\u0002\u0002\u0002",
    "\u001c\u001e\u0005\u0004\u0003\u0002\u001d\u001c\u0003\u0002\u0002\u0002",
    "\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u001f\u0003",
    "\u0002\u0002\u0002\"#\u0007\u0002\u0002\u0003#\u0003\u0003\u0002\u0002",
    "\u0002$%\u0007\u0019\u0002\u0002%&\u0007\u0003\u0002\u0002&\'\u0005",
    "\u0018\r\u0002\'(\u0007\u0004\u0002\u0002()\u0007\u0005\u0002\u0002",
    ")*\u0005\u0006\u0004\u0002*\u0005\u0003\u0002\u0002\u0002+,\b\u0004",
    "\u0001\u0002,/\u0005\b\u0005\u0002-.\u0007\u0016\u0002\u0002.0\u0005",
    "\b\u0005\u0002/-\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u00021",
    "/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u00022>\u0003\u0002\u0002",
    "\u000234\u0007\u0013\u0002\u00024>\u0005\u0006\u0004\b5>\u0007\u0014",
    "\u0002\u000267\u0007\u0003\u0002\u000278\u0005\u0006\u0004\u000289\u0007",
    "\u0004\u0002\u00029>\u0003\u0002\u0002\u0002:>\u0005\u000e\b\u0002;",
    ">\u0005\u0014\u000b\u0002<>\u0005\u0016\f\u0002=+\u0003\u0002\u0002",
    "\u0002=3\u0003\u0002\u0002\u0002=5\u0003\u0002\u0002\u0002=6\u0003\u0002",
    "\u0002\u0002=:\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=<\u0003",
    "\u0002\u0002\u0002>D\u0003\u0002\u0002\u0002?@\f\n\u0002\u0002@A\u0007",
    "\u0015\u0002\u0002AC\u0005\u0006\u0004\u000bB?\u0003\u0002\u0002\u0002",
    "CF\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002",
    "\u0002E\u0007\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002GJ\u0005",
    "\n\u0006\u0002HJ\u0007\f\u0002\u0002IG\u0003\u0002\u0002\u0002IH\u0003",
    "\u0002\u0002\u0002J\t\u0003\u0002\u0002\u0002KL\b\u0006\u0001\u0002",
    "LM\u0007\u0017\u0002\u0002MV\u0005\n\u0006\bNO\u0007\u0011\u0002\u0002",
    "OV\u0005\u001a\u000e\u0002PQ\u0007\u0011\u0002\u0002QV\u0005\f\u0007",
    "\u0002RV\u0005\f\u0007\u0002SV\u0007\u0011\u0002\u0002TV\u0005\u001a",
    "\u000e\u0002UK\u0003\u0002\u0002\u0002UN\u0003\u0002\u0002\u0002UP\u0003",
    "\u0002\u0002\u0002UR\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002",
    "UT\u0003\u0002\u0002\u0002V_\u0003\u0002\u0002\u0002WX\f\n\u0002\u0002",
    "XY\u0007\u0018\u0002\u0002Y^\u0005\n\u0006\u000bZ[\f\t\u0002\u0002[",
    "\\\u0007\u0017\u0002\u0002\\^\u0005\n\u0006\n]W\u0003\u0002\u0002\u0002",
    "]Z\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`\u000b\u0003\u0002\u0002\u0002a_\u0003",
    "\u0002\u0002\u0002bc\u0007\u0003\u0002\u0002cd\u0005\n\u0006\u0002d",
    "e\u0007\u0004\u0002\u0002e\r\u0003\u0002\u0002\u0002fg\u0007\u0019\u0002",
    "\u0002gh\u0007\u0003\u0002\u0002hm\u0005\n\u0006\u0002ij\u0007\u0006",
    "\u0002\u0002jl\u0005\n\u0006\u0002ki\u0003\u0002\u0002\u0002lo\u0003",
    "\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "np\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002pq\u0007\u0004\u0002",
    "\u0002q\u000f\u0003\u0002\u0002\u0002rs\u0007\u0019\u0002\u0002st\u0007",
    "\u0007\u0002\u0002tu\u0007\u0003\u0002\u0002uv\u0005\n\u0006\u0002v",
    "w\u0007\u0004\u0002\u0002w\u0011\u0003\u0002\u0002\u0002xy\u0007\b\u0002",
    "\u0002yz\u0005\u0006\u0004\u0002z\u0013\u0003\u0002\u0002\u0002{|\u0007",
    "\t\u0002\u0002|}\u0007\n\u0002\u0002}\u0082\u0005\u0018\r\u0002~\u007f",
    "\u0007\u0003\u0002\u0002\u007f\u0080\u0005\u0006\u0004\u0002\u0080\u0081",
    "\u0007\u0004\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082~",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0005\u0012\n\u0002\u0085\u0015",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u000b\u0002\u0002\u0087\u008c",
    "\u0005\u0018\r\u0002\u0088\u0089\u0007\u0003\u0002\u0002\u0089\u008a",
    "\u0005\u0006\u0004\u0002\u008a\u008b\u0007\u0004\u0002\u0002\u008b\u008d",
    "\u0003\u0002\u0002\u0002\u008c\u0088\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0005\u0012\n\u0002\u008f\u0017\u0003\u0002\u0002\u0002\u0090\u0095",
    "\u0005\u001a\u000e\u0002\u0091\u0092\u0007\u0006\u0002\u0002\u0092\u0094",
    "\u0005\u001a\u000e\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0097",
    "\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095",
    "\u0003\u0002\u0002\u0002\u0098\u0090\u0003\u0002\u0002\u0002\u0098\u0099",
    "\u0003\u0002\u0002\u0002\u0099\u0019\u0003\u0002\u0002\u0002\u009a\u009d",
    "\u0005\u0010\t\u0002\u009b\u009d\u0007\u0019\u0002\u0002\u009c\u009a",
    "\u0003\u0002\u0002\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u001b",
    "\u0003\u0002\u0002\u0002\u0010\u001f1=DIU]_m\u0082\u008c\u0095\u0098",
    "\u009c"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class logicspecParser extends antlr4.Parser {

    static grammarFileName = "logicspec.g4";
    static literalNames = [ null, "'('", "')'", "'==='", "','", "'_'", "'implies'", 
                            "'for'", "'all'", "'exists'", null, null, null, 
                            null, null, null, null, "'not'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "STRING_LITERAL", "DOUBLE_QUOTED_STRING_LITERAL", 
                             "UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL", 
                             "SINGLE_QUOTED_STRING_LITERAL", "UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL", 
                             "INT", "DIGIT", "UNARY_LOGICAL_OPERATOR", "LOGICAL_CONSTANT", 
                             "LOGICAL_OPERATOR", "RELATIONAL_OPERATOR", 
                             "UNARY_BINARY_ARITHMETIC_OPERATOR", "ARITHMETIC_OPERATOR", 
                             "IDENTIFIER", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "file", "predicate", "logical_expression", "string_or_arithmetic_expression", 
                         "arithmetic_expression", "bracketed_arithmetic_expression", 
                         "predicate_call", "indexed_accessor", "implies_block", 
                         "for_all_block", "exists_block", "identifier_list", 
                         "identifier" ];

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
    	case 4:
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
    			return this.precpred(this._ctx, 8);
    		case 2:
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
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===logicspecParser.IDENTIFIER) {
	            this.state = 26;
	            this.predicate();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
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
	        this.state = 59;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
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
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 47; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Logical_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_logical_expression);
	                this.state = 61;
	                if (!( this.precpred(this._ctx, 8))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                }
	                this.state = 62;
	                this.match(logicspecParser.LOGICAL_OPERATOR);
	                this.state = 63;
	                this.logical_expression(9); 
	            }
	            this.state = 68;
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



	string_or_arithmetic_expression() {
	    let localctx = new String_or_arithmetic_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, logicspecParser.RULE_string_or_arithmetic_expression);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
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
	            throw new antlr4.error.NoViableAltException(this);
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


	arithmetic_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Arithmetic_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, logicspecParser.RULE_arithmetic_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
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
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 91;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, logicspecParser.RULE_arithmetic_expression);
	                    this.state = 85;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
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
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
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
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
	        while(_la===logicspecParser.T__3) {
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
	    this.enterRule(localctx, 16, logicspecParser.RULE_implies_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(logicspecParser.T__5);
	        this.state = 119;
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



	exists_block() {
	    let localctx = new Exists_blockContext(this, this._ctx, this.state);
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
	        if(_la===logicspecParser.T__0) {
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
	    this.enterRule(localctx, 22, logicspecParser.RULE_identifier_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===logicspecParser.IDENTIFIER) {
	            this.state = 142;
	            this.identifier();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===logicspecParser.T__3) {
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
	    this.enterRule(localctx, 24, logicspecParser.RULE_identifier);
	    try {
	        this.state = 154;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
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

	string_or_arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_or_arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(String_or_arithmetic_expressionContext,i);
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


	UNARY_LOGICAL_OPERATOR() {
	    return this.getToken(logicspecParser.UNARY_LOGICAL_OPERATOR, 0);
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

	LOGICAL_CONSTANT() {
	    return this.getToken(logicspecParser.LOGICAL_CONSTANT, 0);
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



class String_or_arithmetic_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logicspecParser.RULE_string_or_arithmetic_expression;
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	STRING_LITERAL() {
	    return this.getToken(logicspecParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.enterString_or_arithmetic_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logicspecListener ) {
	        listener.exitString_or_arithmetic_expression(this);
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

	UNARY_BINARY_ARITHMETIC_OPERATOR() {
	    return this.getToken(logicspecParser.UNARY_BINARY_ARITHMETIC_OPERATOR, 0);
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

	INT() {
	    return this.getToken(logicspecParser.INT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	bracketed_arithmetic_expression() {
	    return this.getTypedRuleContext(Bracketed_arithmetic_expressionContext,0);
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
