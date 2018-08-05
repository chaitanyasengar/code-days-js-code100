//   Use {} Instead of New Object()

var o = new Object();
o.name = 'chaitanya';
o.lastName = 'singh';
o.someFunction = function() {
   console.log(this.name);
}

// Better way
var o = {
   name: 'chaitanya',
   lastName = 'Singh',
   someFunction : function() {
      console.log(this.name);
   }
};