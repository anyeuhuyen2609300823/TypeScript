function web17317_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
}
var numArray2 = ["Thu", "Hoàng", "Đức Anh"];
var result2 = web17317_map(numArray2, function (item, index) {
    return item + "-web17317" + " " + index;
});
console.log(result2);
