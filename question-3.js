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
userPassword ="passwords"
function checkPasswordStrength(userPassword) {
    let count = 0
    let result = ""
    for(i=0; i < userPassword.length; i++) {
        console.log(userPassword[i])
    }
    if (count < 6) {
        count += userPassword.length
        result = "Weak";
    } else if (count >= 6 || count <= 10) {
        count += userPassword.length
        result = "Medium";
    } else if (count > 10) {
        count += userPassword.length
        result = "Strong";
    } return result;
}
console.log(checkPasswordStrength(userPassword))


// function checkPasswordStrength(userPassword) {
//     let count =0;
//     for(i=0; i < userPassword.length; i++) {
//         if (count > 6) {
//             count += userPassword[i]
//             console.log(count);
//         }
//     }
//     return 
// }


