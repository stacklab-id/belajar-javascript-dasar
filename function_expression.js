// const hello = function(nama, pesan) {
//     console.log(`Hello ${nama}`);
//     console.log(`ini pesan saya: ${pesan}`);
// }

// hello("taruna", "belajar javascript dasar");
// hello("wahyudi", "Belajar HTML");

function sayHello(cetakNama) {
    cetakNama("ini dari fungsi say hello");
    console.log('ini akhir dari function say hello');
}

// const cetak = function(nama) {
//     console.log(nama);
// }

sayHello(function(name) {
    console.log(name);
});