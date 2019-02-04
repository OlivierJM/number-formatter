# number-formatter

> Say you are getting input from your users and you want to format it in a zambian mobile format.

**Note**: This will be extended to accomodate more country codes

The number can either be **+2609XXXXXX**, **09XXXXXXXX**, **9XXXXXXXX** The total count of this number should be 10 and because this number can include the '+'
sign, you should pass it as a string.  
The return value should be formatted as follows **260 9XXXXXXXX**

`appendCode(number)` ==> 260 9XXXXXXXX
