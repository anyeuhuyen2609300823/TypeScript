function web17317_map<T> (arr: T[], callback:(item:T,index:number)=>T): T[] {
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i],i);
        temp.push(newItem);
    }
    return temp;
} 


const numArray2 = ["Thu", "Hoàng", "Đức Anh"]
const result2 = web17317_map(numArray2, (item, index) => {
    return item + "-web17317" + " " + index;
})

console.log(result2);
