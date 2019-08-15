// cari mean, median, modus

const arr = new Array(1,2,3,4,4,1,10,10,10);


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
    console.log(`median = ${median}\n\n`);

    // modus
    let modus = [], count = [], i, number, maxIndex = 0;
    for (i = 0; i < myArr.length; i += 1) {
        number = myArr[i];
        console.log('number = ' +number);
        count[number] = (count[number] || 0) + 1;
        console.log('count[number] = ' + count[number]);
        if (count[number] > maxIndex) {
            maxIndex = count[number];
            console.log('maxIndex = ' + maxIndex);
            console.log(count)
        }
        console.log('--------------- \n');
    }
    console.log(count);
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modus.push(Number(i));
            }
        }
    return modus;
}


console.log(stats(arr));