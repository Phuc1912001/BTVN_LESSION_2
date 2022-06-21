//bài này em sẽ làm 2 cách ạ 
//cách 1 
function reverseString(str) {
    var cutarray = str.split("")// ở đây là em đang tách từng ký tự ạ 
    var strToArray = cutarray.reverse()// đây là em đang đảo ngược mảng các ký tự ạ 
    var newString = strToArray.join("")// đây là em đang gộp các mảng thành chuỗi ạ 
    return newString;

}
console.log(reverseString('hello'));



// rút gọn cách 1 
/**function reverseString(str) {
    
    return str.split("").reverse().join("");
    
}
reverseString('abc');*/

//cách 2 dùng vvongf lặp for


/**function reverseString(str) {
    let newString = "" ; // khai báo hàm rỗng để chứa chuỗi mới 
    for ( let i = str.length - 1; i >= 0 ; i--) {
        newString += str[i];
    }
    console.log(newString)
}
reverseString('phuc');
*/

/*
Giải thích:
  - Bước 2:
    + Lệnh 1: Ta khai báo biến i = str.length - 1, tức là giá trị ban đầu của i khi
    chạy vòng lặp for là bằng giá trị của độ dài chuỗi trừ đi 1, tại sao lại trừ đi 1?
    Vì index trong JS được đánh dấu từ 0 nhé.
    với cả chị cũng giải thích trong buổi học là str.length - 1 là nó sẽ lấy phần tử cuối cùng trước cụ thể ở đây là chữ 'c'
    + Lệnh 2: Ta đặt i >= 0, tức là khi i giảm về đến 0 thì vòng lặp sẽ kết thúc.
    + Lệnh 3: Ta cho i tự trừ đi một đơn vị sau mỗi lần lặp.
  - Bước 3: Ta dùng kỹ thuật cộng chuỗi để nối các chữ lại với nhau sau mỗi lần lặp sẽ
  được cộng dồn vào biến newString
  
*/



  
  

