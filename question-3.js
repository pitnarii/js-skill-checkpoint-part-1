// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
/*
write function checkPasswordStrength(userPassword) return string
pwd < 6 --> "Weak"
pwd >= 6 && pwd <= 10 --> "Medium"
pwd > 10 --> "Strong"
if-else, count string, loop, check
*/
userPassword ="passwordIsStrong"
console.log(userPassword.length)
function checkPasswordStrength(userPassword) {
    let count = userPassword.length
    let result = ""
    for(i=0; i < userPassword.length; i++) {
        console.log(userPassword[i])
    }
    if (count < 6) {
        result = "Weak";
    } else if (count >= 6 && count <= 10) {
        result = "Medium";
    } else if (count > 10) {
        result = "Strong";
    } return result;
}
console.log(checkPasswordStrength(userPassword))



