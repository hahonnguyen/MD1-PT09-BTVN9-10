//Bai tap 1 + Cho mảng ban đầu. Tính tổng các phẩn tử trong mảng.
// let arr = [1,3,4,6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = arr[i] + sum;
// }
// console.log(`Tổng của mảng là ${sum}`);

//Bài tập 2 : Tìm phần tử lớn nhất trong mảng + Cho mảng ban đầu. Tìm phần tử lớn nhất.
// let arr = [1,3,4,6] ;
// let max = arr[0] ;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(`phan tu lon nhat la ${max} `);

//Bài tập 3: Tìm phần tử nhỏ nhất trong mảng + Cho mảng ban đầu. Tìm phần tử nhỏ nhất.
// let arr = [1,3,4,6] ;
// let min = arr[0] ;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(`phan tu lon nhat la ${min} `);

//Bai tập 4: 
// Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cho mảng ban đầu, làm theo 2 cách:
// + Cách 1: Không sử dụng hàm có sẵn
// let arr = [1,3,4,6] ;
// let number = 4 ;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//         console.log(`${arr[i]} có trong mảng`);
//     }
    
// }

// + Cách 2: Sử dụng hàm có sẵn
// let arr = [1,3,4,6] ;
// let numberInput = +prompt('Nhap vao mot so bat ky') ;
// if (arr.includes(numberInput , 0)) {
//     console.log(`So ${numberInput} co trong mang`);
// } else {
//     console.log(`So ${numberInput} khong co trong mang`);
// }




// Bài tập 5: Đảo ngược giá trị trong mảng
// let arr = [1,3,4,6] ;
// arr.reverse();
// console.log(arr);

// Bài tập 6: Lọc các phần tử chẵn trong mảng:
// let arr = [1,3,4,6] ;
// let evenNumber = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenNumber.push(arr[i]);
//     }
    
// }
// console.log(`Cac phan tu chan la ${evenNumber} `);

// Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
// let arr = [1, 2, 3, 2, 4, 2, 5] ;
// let count = 0;
// let input = +prompt('Nhap mot so bat ki');
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === input) {
//         count === ++count;
//     }
    
// }
// console.log(`Số ${input} xuất hiện ${count} lần`);

// Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
// let arr = [4, 2, 9, 5, 1];
// arr.sort();
// console.log(arr);