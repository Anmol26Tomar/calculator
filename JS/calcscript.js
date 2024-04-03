
function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
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

function naturalLogarithm(x) {
    return Math.log(x);
}
