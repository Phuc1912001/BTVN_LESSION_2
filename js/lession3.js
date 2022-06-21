//đề bài tính tổng tuổi

var array = [
    {
        id : 1,
        name: 'phuc',
        age: 18

    },
    {
        id : 2,
        name: 'tuyết',
        age: 22

    },
    {
        id : 3,
        name: 'ánh',
        age: 18

    },
    {
        id : 4,
        name: 'liễu xinh gái ',
        age: 18

    }
]

var i = 0
function ages(bientichtru,giatrihientai) { //em ghi bằng tiếng việt cho dễ nhớ ạ bao giờ em quen thì em sẽ dùng tiếng anh ạ 
    i++;
    return bientichtru + giatrihientai.age ;
}
var totalage = array.reduce(ages , 0)
console.log(totalage)

// cách rút gọn
/** 
var totalage = array.reduce(function(bientichtru,giatrihientai) {
    return bientichtru + giatrihientai.age 
} , 0)
console.log(totalage) */

