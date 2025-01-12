
const data = new Set();

data.add('A');
data.add('B');
data.add('C');

console.log(data);

data.add('C');

for (const d of data) {
    console.log(d);
}

data.delete('B');

console.log(data);