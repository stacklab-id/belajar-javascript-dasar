// const mobil = {
//     merk: 'Honda HRV',
//     warna: 'Putih',
//     transmisi: 'Matic',

//     jalan: function() {
//         console.log('mobil berjalan');
//     },

//     mundur: () => {
//         console.log('mobil mundur');
        
//     },

//     rem: () => {
//         console.log('mobil berhenti');
        
//     }
// }

// const merk = mobil.merk;
// console.log(`merk nya adalah: ${merk}`);

// mobil.jalan();


// const student = {
//     nama: 'Taruna',
//     jurusan: 'Teknik Informatika',
//     aktif: true,
// }

// for (let s in student) {
//     console.log(`key: ${s} | value: ${student[s]}`);
// }



const mobil = {
    merk: 'Honda HRV',
    warna: 'Putih',
    transmisi: 'Matic',

    jalan: function() {
        console.log('mobil berjalan');
    },

    mundur: () => {
        console.log('mobil mundur');
        
    },

    rem: () => {
        console.log('mobil berhenti');
        
    }
}

mobil.merk = 'Mercedez';
mobil.roda = 4;

console.table(mobil);

delete mobil.rem;
console.table(mobil);