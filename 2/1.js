let arr =
[
    {
    name: 'Tatas',
    company: 'Arkademy',
    job: 'Trainer',
    status: 'single',
    city: 'Jogja'
    },
    {
    name: 'Pratama',
    company: 'Emago',
    job: 'Trainer',
    status: 'single',
    city: 'Jakarta'
    }
];
console.log('array of object sebelum update:')
console.table(arr);
console.log('\n \n');


arr = [
    {
        ...arr[0],
        status: 'menikah',
        city: 'jakarta'
    },
    {
        ...arr[1],
        company: 'Arkademy',
        city: 'jogja'
    }
]

console.log('setelah update array dengan spread operator:')
console.table(arr);