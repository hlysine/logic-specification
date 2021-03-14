# logic-specification

Syntax highlighting, snippets and syntax checking for Logic Specification.

## Syntax Guide

### Defining a predicate (function)

```logicspec
predicate_name(parameters) === condition
```

Example:

```logicspec
my_predicate(a, b) === a and b
```

> Note: identifiers (name of variables and predicates) must not end with underscore `_` and must contain alphabets and underscore only

### Operators

```logicspec
a and b
a or b
not a
a > b
a < b
a = b
a >= b
a <= b
a != b
```

### Blocks

#### Exists

```logicspec
exists new_variables (variable_predicate) implies condition
```

Example:

```logicspec
exists a, b (a > 0 and b < 10) implies a = b
```

#### For all

```logicspec
for all new_variables (variable_predicate) implies condition
```

Example:

```logicspec
for all a, b (a > 0 and b < 10) implies a = b
```

### String literals

Both single and double quotes are fine
Escape quotes using backslash `\`

```logicspec
"a"
'b'
"\""
'\''
```

### Comments

Use `#` for line comments. There are no block comments.

```logicspec
# this is a comment
my_predicate(a, b) === a and b # this is another comment
```

### Indexed variables

Use underscore followed by a bracket for indexed variables

```logicspec
variable_name_(index)
```

Example:

```logicspec
for all a (1 <= a <= 10) implies (
  exists b_(a) implies b_(a) > 10
)
```

### Full Example

```logicspec
is_number(m, n) ===
for all a (m <= a <= n)
implies is_digit(c_(a))

# Another formatting style
is_sequence_equal(m, n, i, j) ===
(m - n = j - i) and
for all x (
  m <= x <= n
) implies (
  c_(x) = c_(i + x - m)
)
```
