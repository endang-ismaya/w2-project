/*jshint esversion: 6 */

/*
Daftar Absensi SD Kelas 1 - SukaSalam
Description:
    - Membuat daftar absensi untuk SD Kelas 1 - SukaSalam
    - Dapat menambahkan/menghapus/mengedit/menampilkan data dari absensi
Field:
    - NO_INDUK
    - HARI, TANGGAL
    - NAMA
    - KELAS
    - ABSEN
        * A => Alpha
        * I => Izin
        * S => Sakit
Fitur:
    - Create/Add Absensi untuk Hari, Tanggal
    - Read Absensi
    - Update Absensi
    - Delete Absensi
Kelas:
    - 1A
    - 1B
    - 1C
Nama Siswa yg terdaftar:
    - A : Abu Bakar, Umar, Utsman, Ali, Tholhah, Zubair, Abdurrahman
    - B : Masruq, Ubaidah, AlQomah, Ummu Darda, Urwah, Abu Salamah, Muthorrif
    - C: Muhammad Sirin, Ibrahim, Ali Husain, Saad Zubair
*/

// Initialiasi no_induk, nama_siswa, kelas
const SISWA_KELAS_1A = [
    ['1A001', 'Abu Bakar', '1A'],
    ['1A002', 'Umar', '1A'],
    ['1A003', 'Utsman', '1A']
];
const SISWA_KELAS_1B = [
    ['1B001', 'Masruq', '1B'],
    ['1B002', 'Ubaidah', '1B'],
    ['1B003', 'AlQomah', '1B']
];
const SISWA_KELAS_1C = [
    ['1C001', 'Muhammad Sirin', '1C'],
    ['1C002', 'Ibrahim', '1C'],
    ['1C003', 'Ali Husain', '1C']
];
const KELAS = ['1A', '1B', '1C'];
const ABSENSI = ['H', 'S', 'I', 'A'];

// initialiasi daftar absen siswa
var absensi_siswa = [
    [ 'Senin, 05-11-2018', '1A001', 'Abu Bakar', '1A', 'H'],
    [ 'Senin, 05-11-2018', '1A002', 'Umar', '1A', 'H'],
    [ 'Senin, 05-11-2018', '1A003', 'Utsman', '1A', 'H'],
    [ 'Senin, 05-11-2018', '1B001', 'Masruq', '1A', 'H'],
    [ 'Senin, 05-11-2018', '1B002', 'Ubaidah', '1A', 'I'],
    [ 'Senin, 05-11-2018', '1B003', 'AlQomah', '1A', 'S'],
    [ 'Senin, 05-11-2018', '1C001', 'Muhammad Sirin', '1A', 'H'],
    [ 'Senin, 05-11-2018', '1C002', 'Ibrahim', '1A', 'S'],
    [ 'Senin, 05-11-2018', '1C003', 'Ali Husain', '1A', 'A'],
    [ 'Selasa, 06-11-2018', '1A001', 'Abu Bakar', '1A', 'I'],
    [ 'Selasa, 06-11-2018', '1A002', 'Umar', '1A', 'H'],
    [ 'Selasa, 06-11-2018', '1A003', 'Utsman', '1A', 'H'],
    [ 'Selasa, 06-11-2018', '1B001', 'Masruq', '1A', 'H'],
    [ 'Selasa, 06-11-2018', '1B002', 'Ubaidah', '1A', 'H'],
    [ 'Selasa, 06-11-2018', '1B003', 'AlQomah', '1A', 'I'],
    [ 'Selasa, 06-11-2018', '1C001', 'Muhammad Sirin', '1A', 'A'],
    [ 'Selasa, 06-11-2018', '1C002', 'Ibrahim', '1A', 'H'],
    [ 'Selasa, 06-11-2018', '1C003', 'Ali Husain', '1A', 'S']
];

// menampilkan data absensi siswa awal
console.log(absensi_siswa);

// Function untuk mendapatkan data lengkap siswa dari no_induk
// Mencari no_induk berurutan dari data SISWA_KELAS_1A, 1B dan 1C
// Mengembalikan nilai Array
function getDetailSiswa(noInduk) {

    for (let i = 0; i < SISWA_KELAS_1A.length; i++) {
        const dataSiswa = SISWA_KELAS_1A[i];
        const dataNoInduk = dataSiswa[0];
        if (dataNoInduk === noInduk) {
            return dataSiswa;
        }
    }

    for (let i = 0; i < SISWA_KELAS_1B.length; i++) {
        const dataSiswa = SISWA_KELAS_1B[i];
        const dataNoInduk = dataSiswa[0];
        if (dataNoInduk === noInduk) {
            return dataSiswa;
        }
    }

    for (let i = 0; i < SISWA_KELAS_1C.length; i++) {
        const dataSiswa = SISWA_KELAS_1C[i];
        const dataNoInduk = dataSiswa[0];
        if (dataNoInduk === noInduk) {
            return dataSiswa;
        }
    }

    return ['00000', 'NA', 'NA'];
}


// Function untuk menambahkan absensi siswa
// Absensi berhasil ditambah jika siswa sudah diregistrasi (ada dalam data SISWA_KELAS_1A, 1B dan 1C)
function addAbsensiSiswa(tanggal, noInduk, absen) {
    const dataSiswa = getDetailSiswa(noInduk);

    if (dataSiswa[0] === '00000') {
        console.log('\n~Tambah data absen gagal, invalid no-induk siswa~\n');
    } else  {
        let arrData = [tanggal, dataSiswa[0], dataSiswa[1], dataSiswa[2], absen];
        absensi_siswa.push(arrData);
        console.log('\n~Tambah data absen berhasil.~\n');
    }
}

// Function untuk menghapus absensi siswa
// Berdasarkan Hari, Tanggal dan no-induk siswa
// Menggunakan: splice
function deleteAbsensiSiswa(tanggal, noInduk) {

    var isBerhasilDiHapus = false;

    for (let i = 0; i < absensi_siswa.length; i++) {
        const dataAbsensi = absensi_siswa[i];
        tanggalAbsensi = dataAbsensi[0];
        noIndukAbsensi = dataAbsensi[1];

        if (tanggal === tanggalAbsensi && noInduk === noIndukAbsensi) {
            absensi_siswa.splice(i, 1);
            console.log('\n~Data absen berhasil dihapus!.~\n');
            isBerhasilDiHapus = true;
            break;
        }
    }

    if (!isBerhasilDiHapus) {
        console.log('\n~Data absen gagal dihapus, tolong cek inputan kembali!.~\n');
    }
}

// Function untuk menghapus absensi siswa
// Berdasarkan input terakhir
// Menggunakan: pop
function deleteLastAbsensiSiswa() {

    if (absensi_siswa.length > 0) {
        absensi_siswa.pop();
        console.log('\n~Data absen terakhir berhasil dihapus!.~\n');
    } else {
        console.log('\n~Tidak Ada yang terhapus!~.');
    }
}

// Function untuk menghapus absensi siswa
// Berdasarkan input pertama
// Menggunakan: shift
function deleteFirstAbsensiSiswa() {

    if (absensi_siswa.length > 0) {
        absensi_siswa.shift();
        console.log('\n~Data absen pertama berhasil dihapus!.~\n');
    } else {
        console.log('\n~Tidak Ada yang terhapus!~.');
    }
}

// Function Absensi
// Return: Akronim Absensi
function getDetailAbsensi(kodeAbsensi) {
    switch (kodeAbsensi) {
        case 'S':
            return 'Sakit';
        case 'I':
            return 'Izin';
        case 'A':
            return 'Alpa';
        default:
            return 'Hadir';
    }
}

// Function untuk menampilkan data absensi siswa
// Berdasarkan input Hari, Tanggal dan no-induk siswa
// Menggunakan: split, switch
// Return: Function dari type menampilkan siswa berdasarkan type tampilan
function showAbsensiSiswa(type) {

    switch(type) {
        case 'single':
            return function(tanggal, noInduk) {
                var result = '~Data tidak ditemukan!~';

                for (let i = 0; i < absensi_siswa.length; i++) {
                    const dataSiswa = absensi_siswa[i];
                    const hariTanggal = dataSiswa[0];
                    const noIndukSiswa = dataSiswa[1];
                    const namaLengkap = dataSiswa[2];
                    const kelas = dataSiswa[3];
                    const absensi = dataSiswa[4];

                    if (tanggal === hariTanggal && noInduk === noIndukSiswa) {
                        let hari = hariTanggal.split(',')[0];
                        let tanggalAbsen = hariTanggal.split(',')[1].trim();

                        result = "Hari: " + hari + "\n";
                        result += "Tanggal: " + tanggalAbsen + "\n";
                        result += "No-Induk: " + noIndukSiswa + "\n";
                        result += "Nama: " + namaLengkap + "\n";
                        result += "Kelas: " + kelas + "\n";
                        result += "Absensi: " + getDetailAbsensi(absensi) + "\n";
                    }
                }

                return result;
            };

        default:
            break;
    }
}

// Function untuk mengedit data absensi siswa
// Berdasarkan Hari, Tanggal dan no-induk siswa


/*
    Test Tambah data Absensi
*/
// test add absensi dengan data invalid -> noinduk yg tidak ada di data '1A004'
addAbsensiSiswa('Rabu, 07-11-2018', '1A004', 'A');
console.log(absensi_siswa);

// test add absensi dengan data valid -> noinduk ada di data '1A003'
addAbsensiSiswa('Rabu, 07-11-2018', '1B002', 'A');
addAbsensiSiswa('Rabu, 07-11-2018', '1C003', 'I');
console.log(absensi_siswa);

/*
    Test Delete data Absensi
*/

// test delete data absensi dengan invalid data
// 'Senin, 12-11-2018', '1C003'
deleteAbsensiSiswa('Senin, 12-11-2018', '1C003');
console.log(absensi_siswa);

// test delete data absensi dengan valid data
// 'Senin, 05-11-2018', '1C003'
deleteAbsensiSiswa('Senin, 05-11-2018', '1C003');
console.log(absensi_siswa);

// test delete data absensi terakhir
deleteLastAbsensiSiswa();
console.log(absensi_siswa);

// test delete data absensi pertama
deleteFirstAbsensiSiswa();
console.log(absensi_siswa);

// test tampilkan data siswa
var singleShow = showAbsensiSiswa('single');
var dataSingleShow = singleShow('Selasa, 06-11-2018', '1A001'); // data valid
console.log(dataSingleShow);

var dataSingleShow = singleShow('Selasa, 06-11-2018', '1K001'); // data invalid
console.log(dataSingleShow);
