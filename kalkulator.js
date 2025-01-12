
function hitung(bil1, bil2, operator) {
    switch (operator) {
        case "+":
            console.log(bil1 + bil2);
            break;
        case "-":
            console.log(bil1 - bil2);
            break;
        case "/":
            console.log(bil1 / bil2);
            break;
        case "*":
            console.log(bil1 * bil2);
            break;
        default:
            console.log('operator yang anda masukan tidak sesuai');
    }
}

const bil1 = Number(window.prompt('Masukan bilangan pertama: '));

const operator = window.prompt(`
Masukan operator: 
[+] Penjumlahan
[-] Pengurangan
[/] Pembagian
[*] Perkalian
`);

const bil2 = Number(window.prompt('Masukan bilangan kedua: '));

hitung(bil1, bil2, operator);
