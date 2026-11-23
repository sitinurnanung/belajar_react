const daftarSiswa = ["Andi","Budi","Citra"];
const sapaSemua = daftarSiswa.map((nama) => {
    return `selamat pagi, ${nama}!`;
});

console.log(sapaSemua);