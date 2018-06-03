// Main JS file containing function definitions

var sampleFunc = function(x) {
  // Simple sample function
  // Parabola!
  return x * x + 1;
}
var evalDerivative = function(func, x, step) {
  // Calculate the derivative of a function "func" at a position "x"
  // Set step to a smaller val for more precise results

  a = x - step;
  b = x + step;
  y_a = func(a);
  y_b = func(b);

  return (y_b - y_a) / (b - a);
}

console.log(evalDerivative(sampleFunc, 2, 0.01));
