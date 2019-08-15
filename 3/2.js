//  membaca array of numbers dan menjumlahkan
//  seluruh member dari array tersebut sehingga hasilnya hanya berupa satu digit saja.

const tambahAngka = arr => {
    let num, str;
    num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    str = num.toString(); //'159'
    num = 0;

    
    while (str.length > 1) {
        for (let j = 0; j < str.length; j++) {
            num += parseInt(str[j]);
        }
        str = num.toString();
        num = 0;
    }
    return parseInt(str);
}

console.log(tambahAngka([123,9,27]));