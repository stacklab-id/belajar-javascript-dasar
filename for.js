// const total = Number(window.prompt('masukan banyak nya bilangan genap: '));

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

for (let i = 1; i<=5; i++) {
    let row = '';
    for(let j = 1; j<=i; j++) {
        row += "*"
    }

    console.log(row);
}