// lab 1 


// khai báo mảng
const arr1 = [1, 2, 3, 10, 14, 4, 5];

// sử dụng selection sort 

// function selectionSort<T>(arr: T[]): T[] {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }

//   return arr;
// }

// const result_2 = selectionSort(arr1);

// console.log(result_2);

//
/// 


// sử dụng vòng lặp lồng để sắp xếp theo thứ tự tăng dần

function sortArray<T>(arr: T[]): T[] {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const result_1 = sortArray(arr1)

console.log(result_1);


// sử dụng quick sort 
function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left: T[] = [];
  const right: T[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const result_3 = quickSort(arr1)
console.log(result_3);
//
///