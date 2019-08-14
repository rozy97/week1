// Array of Object
// - show all
// - push
// - delete
// - edit.

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

// push
let pushArray = {
    schoolName: "BSI",
    yearIn: 2012,
    yearOut: 2017
}
arrayObject.push(pushArray);
console.log(arrayObject);

// delete
arrayObject.pop();
console.log(arrayObject);
arrayObject.shift();
console.log(arrayObject);

// edit
arrayObject[0] = pushArray;
console.log(arrayObject);