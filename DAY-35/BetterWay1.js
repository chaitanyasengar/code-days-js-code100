//   Use [] Instead of New Array()
var a = new Array();
a[0] = "Joe";
a[1] = 'Plumber';

//Better
var a = ['Joe','Plumber'];

// Long List of Variables? Omit the "Var" Keyword and Use Commas Instead
var someItem = 'some string';
var anotherItem = 'another string';
var oneMoreItem = 'one more string';

//Better
var someItem = 'some string',
    anotherItem = 'another string',
    oneMoreItem = 'one more string';