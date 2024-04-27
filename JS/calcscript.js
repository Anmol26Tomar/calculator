function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLastCharacter() {
  var display = document.getElementById("display");
  var currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

function calculateResult() {
  try {
    var expression = document.getElementById("display").value;

    expression = expression.replace(
      /factorial\((\d+)\)/g,
      function (match, num) {
        return factorial(parseInt(num));
      }
    );

    expression = expression.replace(
      /naturalLogarithm\(([\d.]+)\)/g,
      function (match, num) {
        return naturalLogarithm(parseFloat(num));
      }
    );

    expression = expression.replace(/cube\(([\d.]+)\)/g, function (match, num) {
      return cube(parseFloat(num));
    });

    expression = expression.replace(
      /square\(([\d.]+)\)/g,
      function (match, num) {
        return square(parseFloat(num));
      }
    );

    expression = expression.replace(
      /cubeRoot\(([\d.]+)\)/g,
      function (match, num) {
        return cubeRoot(parseFloat(num));
      }
    );

    expression = expression.replace(
      /logarithmBase2\(([\d.]+)\)/g,
      function (match, num) {
        return logarithmBase2(parseFloat(num));
      }
    );

    expression = expression.replace(
      /inverse\(([\d.]+)\)/g,
      function (match, num) {
        return inverse(parseFloat(num));
      }
    );

    expression = expression.replace(
      /powerOfTen\(([\d.]+)\)/g,
      function (match, num) {
        return powerOfTen(parseFloat(num));
      }
    );

    var result = eval(expression);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid expression");
    }
    document.getElementById("display").value = result;
  } catch (error) {
    if (error.message === "Division by zero") {
      document.getElementById("display").value = "Division by zero";
    } else {
      document.getElementById("display").value = "Invalid expression";
    }
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

function naturalLogarithm(x) {
  if (x <= 0) {
    throw new Error("Invalid input for logarithm function");
  }
  return Math.log(x);
}

function cube(x) {
  return Math.pow(x, 3);
}

function square(x) {
  return Math.pow(x, 2);
}

function cubeRoot(x) {
  return Math.cbrt(x);
}

function logarithmBase2(x) {
  return Math.log2(x);
}

function inverse(x) {
  return 1 / x;
}

function powerOfTen(x) {
  return Math.pow(10, x);
}
