//kiểm tra xem obj có rỗng hay k 
const a = {}
function isEmpty(obj) {
    for(var key in obj ) {
        console.log(key)
        if(obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
console.log(isEmpty(a))