// function 
function demoFunc(): void {

};

// never function 
function neverFunc():never {
    // while(true)
    // while (true) {
        
    // }

    // error
    const error = new Error("có lỗi xảy ra!");
    throw error;
}

// 
const result = demoFunc();
// console.log(result);


// function number
function sum(): number{
    return 10
}

// function parameter
function parameter(name:string): string{
    return "tên" + name;
}

function sumNumber(a:number,b?:number): number{
    return a + b
}

sumNumber(20)

console.log(sumNumber(20,10));


// => callback  function 
function we17317_map(arr:any[], callback: (a:number) => number){
    let temp = []
    for (const interator of arr) {
        console.log(interator);
        
        const result = callback(interator)
        temp.push(result)
    }
    return temp
}


// rest parameters

const showClass = function (name:string , ...classes: string[]) {
    console.log(`sinh viên ${name} học lớp ${classes.join(",")}`);
}

showClass("Duy Ẩn", "nodejs","typescript")






