// const array2D = [
//     [1, 'Javascript', true],
//     [2, 'PHP', false],
//     [3, 'CSS', false]
// ];

// console.table(array2D);

const array2D = [
    ['Javascript', 'Nodejs'],
    ['PHP', 'Laravel'],
    ['Java', 'Springboot']
]

for (let i = 0; i < array2D.length; i++) {
    console.log(`No. ${i}`);

    for (let j = 0; j < array2D[i].length; j++) {
        if (j == 0) {
            console.log(`Bahasa: ${array2D[i][j]}`);
        } else if (j == 1) {
            console.log(`Framework: ${array2D[i][j]}`);   
        }

    }
    console.log('------------------------')
}
