// CEK PALINDROME

const isPalindrome = str => {
    
    str = str.replace(/\s+/g, ''); // REGEX UNTUK MENGHILANGKAN SPASI
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }  
    }
    return true; 
}

console.log(isPalindrome('nurses run'));
console.log(isPalindrome('Makam'));
console.log(isPalindrome('Bukan palindrome'));