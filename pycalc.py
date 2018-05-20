def my_function(x):
    # Quickie function
    return (x * x) + 1

def eval_derivative(x, step):
    # Evaluate the definite derivative at a given x value
    # Set step at a positive value close to 0

    y_a = my_function(x - step)
    y_b = my_function(x + step);

    m = (y_b - y_a) / ((x + step) - (x - step))

    return m

def eval_integral(a, b, rects):
    # rects is the number of rects for the Reimann sum

    sum = 0

    width = (b - a) / rects

    for i in range(rects):
        sum += width * my_function(a + (width * i))

    return sum

print("Derivative: " + str(eval_derivative(1, 0.000000000001)))
print("Integral: " + str(eval_integral(2, 4, 100000000)))
