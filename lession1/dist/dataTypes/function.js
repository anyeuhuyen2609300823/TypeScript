// function 
function demoFunc() {
}
;
// never function 
function neverFunc() {
    // while(true)
    // while (true) {
    // }
    // error
    var error = new Error("có lỗi xảy ra!");
    throw error;
}
// 
var result = demoFunc();
// console.log(result);
// function number
function sum() {
    return 10;
}
// function parameter
function parameter(name) {
    return "tên" + name;
}
function sumNumber(a, b) {
    return a + b;
}
sumNumber(20);
console.log(sumNumber(20, 10));
// => callback  function 
function we17317_map(arr, callback) {
    var temp = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var interator = arr_1[_i];
        console.log(interator);
        var result_4 = callback(interator);
        temp.push(result_4);
    }
    return temp;
}
// rest parameters
var showClass = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    console.log("sinh vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(",")));
};
showClass("Duy Ẩn", "nodejs", "typescript");
