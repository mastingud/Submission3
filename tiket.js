console.log('--Tiket Travel XYZ');
console.log('Tujuan============Harga=======Nomor Tujuan');
console.log('_______________________________________')
console.log('Kampung Lalang    500000           1');
console.log('Binjai            150000           2');
console.log('Medan             400000           3');
console.log('\n');

var readline = require('readline-sync')
var nama = readline.question('Masukan Nama: ');
var kode = parseInt(readline.question('Masukan Nomor Tujuan: '));
var jumlah = parseInt(readline.question('Masukan Jumlah Tiket: '));
var anggota = readline.question('Apakah Anda Member? [y/n]: ');
console.log('\n');

//harga
var hargatiket;
switch (kode) {
	case 1: hargatiket = 500000; break; //kampung lalang
	case 2: hargatiket = 150000; break;	//binjai
	case 3: hargatiket = 400000; break;	//medan
	default: {
		console.log('Nomor salah');
		process.exit(1);
	}
}

//total harga 
var totaltiket = hargatiket*jumlah;

//member
var potonganharga;
if (anggota==('y'||'Y')) {
potonganharga = 0.10*totaltiket;
} else if (anggota==('n'||'N')) {
potonganharga = 0;
}
//total harga keseluruhan
hasil = totaltiket-potonganharga;

//output
console.log('Harga Tiket: ' + hargatiket);
console.log('Sub Total: ' + totaltiket);
console.log('Diskon: ' + potonganharga);
console.log('Total Bayar: ' + hasil);