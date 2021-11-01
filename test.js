var myfunc = function(a, x) {
    return a * x;
  };
  var x = myfunc(2, 3);
  var y = myfunc;
  alert(x);
  alert(y(2,3));
  