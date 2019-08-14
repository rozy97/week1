const arrHuruf = ['a', 'c', 'z', 'q', 'p', 'k', 'g', 'i', 'f', 't', 'e'];
const arrBool = [true, false, true, true, true, false, false, true, false, true, true];

const mesinPrinter = (huruf, bool) => {
    let returnValue = '';
    for (let i = 0; i < huruf.length; i++) {
        if (bool[i]) {
            returnValue += huruf[i] + '  ';
        }
        
    }
    return returnValue;
}
console.log(mesinPrinter(arrHuruf, arrBool));