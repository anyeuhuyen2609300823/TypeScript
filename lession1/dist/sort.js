// lab 1 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// khai báo mảng
var arr1 = [1, 2, 3, 10, 14, 4, 5];
// sử dụng selection sort 
function selectionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
        }
    }
    return arr;
}
var result_2 = selectionSort(arr1);
console.log(result_2);
/// 
// sử dụng vòng lặp lồng để sắp xếp theo thứ tự tăng dần
function sortArray(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var result_1 = sortArray(arr1);
console.log(result_1);
// sử dụng quick sort 
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
}
var result_3 = quickSort(arr1);
console.log(result_3);
