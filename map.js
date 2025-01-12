

const map = new Map([
    ['judul', 'laskar pelangi'],
    ['harga', 2000],
    ['published', true]
]);

map.set('jumlah_harga', 100);
map.set(1, 'nomor_satu');

map.set('judul', 'sang pemimpi');

console.log(map);

const judulBuku = map.get('judul');
console.log(`ini adalah judul buku: ${judulBuku}`);

const values = map.values();

for (let value of values) {
    console.log(value);
}

map.delete('published');

console.log(map);
