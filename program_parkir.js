
// const tarif = 2000;
// const bayar = Number(window.prompt('masukan biaya parkir yang dibayar oleh user: '));

// if (bayar == tarif) {
//     console.log('terimakasih! anda berhasil membayar parkir');
// } else if (bayar > tarif) {
//     console.log(`kembali nya sebesar: ${bayar - tarif}`);
// } else {
//     console.log(`maaf uang anda tidak cukup, kurang: ${tarif - bayar}`);
// }


// const huruf = window.prompt('masukan huruf: ');
// if (huruf === "A") {
//     console.log('ini adalah A');
// } else if (huruf === "B") {
//     console.log('ini adalah B');
// } else if (huruf === "C") {
//     console.log('ini adalah C');
    
// }


const kendaraan = Number(window.prompt(`
Masukan Jenis Kendaraan: 
1. Motor
2. Mobil
3. Bus
`));

switch (kendaraan) {
    case 1:
        console.log('biaya parkir /jam Rp.3000');
        break;
    case 2:
        console.log('biayar parkir /jam Rp.5000');
        break;
    case 3:
        console.log('biaya parkir /jam Rp.10.000');
        break;
    default:
        console.log('input yang anda tidak diketahui');
}