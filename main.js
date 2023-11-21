const fibo = [0, 1]
function showFibo(value) {
    if (value < 2) {
        alert("you lox")
        return
    }

    for (let i = 0; i < value - 2; i++) {
        fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1])
    }

    console.log(fibo);
}