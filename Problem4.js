function caesarCipher(offset, input) {
    // your code here
    let indexJump = offset % 26, outputStr = ''

    for(let i in input){
        let codeChar = input.charCodeAt(i) + indexJump
        if(codeChar <= 122 ){
            outputStr += String.fromCharCode(codeChar)
        }else{
            codeChar = (codeChar % 122) + 96
            outputStr += String.fromCharCode(codeChar)
        }
    }
    return outputStr
}


console.log(caesarCipher(3, "abc")) // def
console.log(caesarCipher(2, "alta")) // cnvc
console.log(caesarCipher(10, "alterraacademy")) // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"))
// bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"))
// mnopqrstuvwxyzabcdefghijkl
  