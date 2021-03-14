grammar logicspec;

file
  : predicate* EOF
  ;

predicate
  : IDENTIFIER '(' identifier_list ')' '===' logical_expression
  ;

logical_expression
  : logical_expression LOGICAL_OPERATOR logical_expression
  | arithmetic_expression (RELATIONAL_OPERATOR arithmetic_expression)+
  | arithmetic_expression RELATIONAL_OPERATOR STRING_LITERAL
  | STRING_LITERAL RELATIONAL_OPERATOR arithmetic_expression
  | '(' logical_expression ')'
  | predicate_call
  | for_all_block
  | exists_block
  ;

arithmetic_expression
  : arithmetic_expression ARITHMETIC_OPERATOR arithmetic_expression
  | INT identifier // should implicit multiplication be allowed?
  | INT bracketed_arithmetic_expression // should implicit multiplication be allowed?
  | bracketed_arithmetic_expression
  | INT
  | identifier
  ;

bracketed_arithmetic_expression
  : '(' arithmetic_expression ')'
  ;

predicate_call
  : IDENTIFIER '(' arithmetic_expression ( ',' arithmetic_expression)* ')'
  ;

indexed_accessor
  : IDENTIFIER '_' '(' arithmetic_expression ')'
  ;

implies_block
  : 'implies' logical_expression
  ;

for_all_block
  : 'for' 'all' identifier_list ('(' logical_expression ')')? implies_block
  ;

exists_block
  : 'exists' identifier_list ('(' logical_expression ')')? implies_block
  ;

identifier_list
  : identifier (',' identifier)*
  ;

identifier
  : indexed_accessor
  | IDENTIFIER
  ;

STRING_LITERAL
  : DOUBLE_QUOTED_STRING_LITERAL
  | SINGLE_QUOTED_STRING_LITERAL
  ;

DOUBLE_QUOTED_STRING_LITERAL
  : UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL '"'
  ;

UNTERMINATED_DOUBLE_QUOTED_STRING_LITERAL
  : '"' (~["\\\r\n] | '\\' (. | EOF))*
  ;

SINGLE_QUOTED_STRING_LITERAL
  : UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL '\''
  ;

UNTERMINATED_SINGLE_QUOTED_STRING_LITERAL
  : '\'' (~['\\\r\n] | '\\' (. | EOF))*
  ;

INT
  : DIGIT+
  ;

DIGIT
  : [0-9]
  ;

LOGICAL_OPERATOR
  : 'and'
  | 'or'
  ;

RELATIONAL_OPERATOR
  : '='
  | '!='
  | '<='
  | '>='
  | '<'
  | '>'
  ;

ARITHMETIC_OPERATOR
  : '+'
  | '-'
  | '*'
  | '/'
  | '^'
  ;

IDENTIFIER
  : [a-zA-Z_]* [a-zA-Z]
  ;

WS
  : [ \t\n\r\p{White_Space}] + -> skip
  ;

LINE_COMMENT
  : '#' ~[\r\n]* -> skip
  ;
