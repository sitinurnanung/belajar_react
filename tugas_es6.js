
const produk = [
  { nama: "Kaos Polos", harga: 75000 },
  { nama: "Headphone Gaming", harga: 350000 },
  { nama: "Sepatu Sneakers", harga: 250000 },
];

const kalimatPromosi = produk.map((item) => {
  const label = item.harga > 100000 ? " - barang mewah" : "";
  return `Ayo beli ${item.nama} hanya Rp${item.harga}${label}!`;
});

kalimatPromosi.forEach((kalimat) => console.log(kalimat));