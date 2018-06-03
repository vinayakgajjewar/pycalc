// Main JS file containing function definitions

var sampleFunc = function(x) {
  // Simple sample function
  // Parabola!
  return 3 * (x * x);
}
var evalDeriv = function(func, x, step) {
  // Calculate the derivative of a function "func" at a position "x"
  // Set step to a smaller val for more precise results

  a = x - step;
  b = x + step;
  y_a = func(a);
  y_b = func(b);

  return (y_b - y_a) / (b - a);
}

var evalInt = function(func, a, b, rects) {
  // rect is the # of rects to consider for the Reimann sum
  // Set it to a larger val for a better estimate

  sum = 0;

  width = (b - a) / rects;

  for (i = 0; i < rects; i++) {
    sum += width * func(a + (width * i));
  }

  return sum;
}

console.log(evalDeriv(sampleFunc, 2, 1E-8));
console.log(evalInt(sampleFunc, 0, 4, 1E8));
