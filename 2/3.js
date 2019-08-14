// cari mean, median, modus

const arr = new Array(1, 2, 3, 4, 5, 6, 6, 2, 5, 8, 0, 6, 4, 10, 20, 30, 3, 3);


const stats = myArr => {
    myArr.sort(function(a, b){return a-b}); // sorting array
    let mean = 0;
    let median = 0;
    
    // mean
    for (let i = 0; i < myArr.length; i++) {
        mean += myArr[i];
    }
    mean = mean / myArr.length; // hasil mean
    console.log(`rata-rata = ${mean}`);
    
    // median
    if (myArr.length % 2) {
        median = myArr[(myArr.length + 1) / 2];
    } else {
        median = (myArr[myArr.length / 2] + myArr[(myArr.length + 2) / 2]) / 2;
    }
    console.log(`median = ${median}`);

    // modus
    var modes = [], count = [], i, number, maxIndex = 0;
    for (i = 0; i < myArr.length; i += 1) {
        number = myArr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    return modes;
}


console.log(stats(arr));