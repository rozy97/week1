// perpustakaan

const buku = 
[
    {
        judul: 'The Pragmatic Programmer',
        status: true
    }, 
    {
        judul: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        status: true
    }, 
    {
        judul: 'The Mythical Man-month: Essays on Software Engineering',
        status: false
    }, 
    {
        judul: 'Working Effectively With Legacy Code',
        status: true
    }, 
    {
        judul: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        status: false
    }, 
    {
        judul: 'Head First Design Patterns',
        status: false
    }, 
    {
        judul: 'Refactoring by Martin Fowler',
        status: true
    }
];



const pinjamBuku = judulBuku => {
    if (typeof judulBuku == 'string') {
        let index;
        for (let j = 0; j < buku.length; j++) {
            if (buku[j].judul == judulBuku) {
                index = j;
            }
        }
        if (buku[index].status) {
            console.log(`Buku "${judulBuku}" tersedia dan bisa dipinjam`);
        } else {
            console.log(`Buku "${judulBuku}" tidak tersedia`);
        }
    }

    
    console.log('\n');
    console.log('Buku yang Tersedia dan bisa dipinjam');
    const bukuTersedia = [];
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].status) {
            bukuTersedia.push(buku[i]);
        }
    }
    console.table(bukuTersedia);
}



// console.log(pinjamBuku('Refactoring by Martin Fowler'));
// console.log(pinjamBuku('Clean Code: A Handbook of Agile Software Craftsmanship'));
console.log(pinjamBuku());
