// array
var arr = ["a", "1", "false"];
// nested arrays
var arrtest = [["a", "b", "c"], ["d", "e"]];
var arrtest1 = [["a", "b", "c"], ["d", "e"]];
// test
var arr5 = ["a", "b", "c"];
// kiểu dữ liệu any 
var b;
b = 10;
b = "xin chào string";
// tuple 
var arr2 = ["a", 1, true];
console.log(typeof arr2);
// enum 
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["RECJECTED"] = 1] = "RECJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
var trangthai = STATUS.RECJECTED;
console.log(trangthai);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(CODE || (CODE = {}));
