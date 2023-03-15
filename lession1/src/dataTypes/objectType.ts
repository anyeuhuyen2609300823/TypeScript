
// array
const arr: Array<string> = ["a", "1", "false"]

// nested arrays
const arrtest: Array<Array<string>> = [["a", "b", "c"], ["d", "e"]]

const arrtest1 : string[][] =  [["a", "b", "c"], ["d", "e"]]

// test
const arr5 : string[] = ["a", "b", "c"]

// kiểu dữ liệu any 
let b: any 
b= 10
b= "xin chào string"


// tuple 
const arr2: [string, number, boolean] = ["a", 1, true]
console.log(typeof arr2);


// enum 

enum STATUS {PENDING, RECJECTED, FULFILLED}

const trangthai: STATUS = STATUS.RECJECTED    
 console.log(trangthai);

enum CODE {
    SUCCESS = 200,
    CLIENT_ERROR = 400,
    SERVER_ERROR = 500
}
 