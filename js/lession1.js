
const vowels = ["a", "e", "i", "o", "u"]
function countVowelsIterative(text) {
    // khởi tạo bộ đếm 
    let counter = 0;
    // lặp lại văn bản xem có phải 1 nguyên âm hay không 
    for (let letter of text.toLowerCase()){
        
        if (vowels.includes(letter)) {
        counter ++;
        }
    }
    console.log(`chuỗi bao gồm  ${counter} nguyên âm`)
    return counter
}
countVowelsIterative('Nguyen Van phuc');
