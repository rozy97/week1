// Array of Object
// - show all
// - push
// - delete
// - edit

const arrayObject = [
    {
        schoolName: "SD",
        yearIn: 2000,
        yearOut: 2005
    },
    {
        schoolName: "SMP",
        yearIn: 2005,
        yearOut: 2008
    },
    {
        schoolName: "SMA",
        yearIn: 2009,
        yearOut: 2011
    },
    {
        schoolName: "ITS",
        yearIn: 2005,
        yearOut: 2008
    }
];

// show all
const showAll = arrayObject.map(obj => obj);
console.log('array.map() show all array:');
console.table(showAll);
console.log('\n');

// push
let pushArray = {
    schoolName: "BSI",
    yearIn: 2012,
    yearOut: 2017
}
arrayObject.push(pushArray);
console.log('array.push method:');
console.table(arrayObject);
console.log('\n');

// delete
console.log('delete array index terakhir & pertama:')
arrayObject.pop(); // delete index terakhir array
// console.table(arrayObject);
arrayObject.shift(); // delete index pertama
console.table(arrayObject);
console.log('\n');


// edit
console.log('edit array:');
arrayObject[0] = pushArray;
console.table(arrayObject);
