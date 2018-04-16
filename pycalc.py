def my_function(x):
    # Quickie function
    return x * x

def eval_derivative(x, step):
    # Evaluate the definite derivative at a given x value
    # Set step at a positive value close to 0

    y_a = my_function(x - step)

    y_b = my_function(x + step);

    m = (y_b - y_a) / ((x + step) - (x - step))

    return m

print(eval_derivative(1, 0.1))
