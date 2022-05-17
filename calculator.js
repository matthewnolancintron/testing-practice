function calculator(mode,x,y){
    switch (mode) {
        case "add":
            // add x and y and return the sum
            return x+y;
            break;
        case "subtract":
            // subtracts y from x
            return x-y;
            break;
        case "divide":
            // divides x by y
            return x/y;
            break;
        case "multiply":
            // multiplies x and y and returns the products
            return x*y;
            break;
        default:
            break;
    }
}

module.exports = calculator;