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
console.log('#-----------------------------'); // for title
console.log('# Informasi Data Absensi Awal'); // for title
console.log('#-----------------------------'); // for title
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
        console.log('~Tambah data absen gagal, invalid no-induk siswa~\n');
    } else  {
        let arrData = [tanggal, dataSiswa[0], dataSiswa[1], dataSiswa[2], absen];
        absensi_siswa.push(arrData);
        console.log('~Tambah data absen berhasil.~\n');
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
            console.log('~Data absen berhasil dihapus!.~\n');
            isBerhasilDiHapus = true;
            break;
        }
    }

    if (!isBerhasilDiHapus) {
        console.log('~Data absen gagal dihapus, tolong cek inputan kembali!.~\n');
    }
}

// Function untuk menghapus absensi siswa
// Berdasarkan input terakhir
// Menggunakan: pop
function deleteLastAbsensiSiswa() {

    if (absensi_siswa.length > 0) {
        absensi_siswa.pop();
        console.log('~Data absen terakhir berhasil dihapus!.~\n');
    } else {
        console.log('~Tidak Ada yang terhapus!~.');
    }
}

// Function untuk menghapus absensi siswa
// Berdasarkan input pertama
// Menggunakan: shift
function deleteFirstAbsensiSiswa() {

    if (absensi_siswa.length > 0) {
        absensi_siswa.shift();
        console.log('~Data absen pertama berhasil dihapus!.~\n');
    } else {
        console.log('~Tidak Ada yang terhapus!~.');
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
// Menggunakan: split, switch, join, slice, unshift
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
        case 'single-join':
            return function(tanggal, noInduk) {
                var result = '~Data tidak ditemukan!~';

                for (let i = 0; i < absensi_siswa.length; i++) {
                    const dataSiswa = absensi_siswa[i];
                    const hariTanggal = dataSiswa[0];
                    const noIndukSiswa = dataSiswa[1];

                    if (tanggal === hariTanggal && noInduk === noIndukSiswa) {
                        result = dataSiswa.join(' | ');
                    }
                }

                return result;
            };

        default:
            return function(inputArray) {
                var result = '-'.repeat(72) + '\n';
                var arrayResult = inputArray.slice(0);

                var header = ['Hari, Tanggal', 'No Induk', 'Nama Siswa', 'Kelas', 'Absensi'];
                arrayResult.unshift(header); // Menambahkan header pada array

                for (let i = 0; i < arrayResult.length; i++) {
                    const dataSiswa = arrayResult[i];
                    const hariTanggal = dataSiswa[0];
                    const noIndukSiswa = dataSiswa[1];
                    const namaLengkap = dataSiswa[2];
                    const kelas = dataSiswa[3];
                    const absensi = dataSiswa[4];

                    result += '|' + hariTanggal + tableSpaces(hariTanggal, 0) + noIndukSiswa +
                    tableSpaces(noIndukSiswa, 1) + namaLengkap + tableSpaces(namaLengkap, 0) +
                    kelas + tableSpaces(kelas, 2) + absensi +  tableSpaces(absensi, 3) + '\n';

                    if (i === 0 || i === arrayResult.length - 1) {
                        result += '-'.repeat(72) + '\n';
                    }
                }

                return result;
            };
    }
}

// Function untuk merapihkan spasi
// Untuk tampilan table
function tableSpaces(strInput, iSpaces) {

    let maxSpaces = 0;
    switch (iSpaces) {
        case 0:
            maxSpaces = 20;
            break;
        case 1:
            maxSpaces = 10;
            break;
        case 2:
            maxSpaces = 7;
            break;
        case 3:
            maxSpaces = 9;
            break;
        default:
            maxSpaces = 20;
            break;
    }


    let i = strInput.length;
    i = maxSpaces - i;

    let spaces = ' '.repeat(i);
    return spaces + '|';
}

// Function untuk mengedit data absensi siswa
// Berdasarkan Hari, Tanggal dan no-induk siswa
// Menampilkan value before update
// Dan Menampilkan value after update
function updateAbsensiSiswa(tanggal, noInduk, absensi) {
    var result = '~Data tidak ditemukan!~';

    for (let i = 0; i < absensi_siswa.length; i++) {
        const dataSiswa = absensi_siswa[i];
        const hariTanggal = dataSiswa[0];
        const noIndukSiswa = dataSiswa[1];

        if (tanggal === hariTanggal && noInduk === noIndukSiswa) {

            // Before update
            let singleJoinShowBefore = showAbsensiSiswa('single-join');
            let dataSingleJoinBefore = singleJoinShowBefore(tanggal, noInduk);
            result = 'BEFORE: ' + dataSingleJoinBefore + "\n";

            // updating
            absensi_siswa[i][4] = absensi;

            // After Update
            let singleJoinShowAfter = showAbsensiSiswa('single-join');
            let dataSingleJoinAfter = singleJoinShowAfter(tanggal, noInduk);
            result += 'AFTER : ' + dataSingleJoinAfter + "\n";
        }
    }

    return result;
}

/*
    Test Tambah data Absensi
*/
// test add absensi dengan data invalid -> noinduk yg tidak ada di data '1A004'
console.log('\n#-------------------------------------------'); // for title
console.log('# Tambah Data Absensi dengan invalid input'); // for title
console.log('#-------------------------------------------'); // for title
addAbsensiSiswa('Rabu, 07-11-2018', '1A004', 'A');
console.log(absensi_siswa);

// test add absensi dengan data valid -> noinduk ada di data '1A003'
console.log('\n#-------------------------------------------'); // for title
console.log('# Tambah Data Absensi dengan valid input'); // for title
console.log('#-------------------------------------------'); // for title
addAbsensiSiswa('Rabu, 07-11-2018', '1B002', 'A');
addAbsensiSiswa('Rabu, 07-11-2018', '1C003', 'I');
console.log(absensi_siswa);

/*
    Test Delete data Absensi
*/

// test delete data absensi dengan invalid data
// 'Senin, 12-11-2018', '1C003'
console.log('\n#-------------------------------------------'); // for title
console.log('# Hapus Data Absensi dengan invalid input'); // for title
console.log('#-------------------------------------------'); // for title
deleteAbsensiSiswa('Senin, 12-11-2018', '1C003');
console.log(absensi_siswa);

// test delete data absensi dengan valid data
// 'Senin, 05-11-2018', '1C003'
console.log('\n#-------------------------------------------'); // for title
console.log('# Hapus Data Absensi dengan valid input'); // for title
console.log('#-------------------------------------------'); // for title
deleteAbsensiSiswa('Senin, 05-11-2018', '1C003');
console.log(absensi_siswa);

// test delete data absensi terakhir
console.log('\n#-------------------------------------------'); // for title
console.log('# Hapus Data Absensi dengan input terakhir'); // for title
console.log('#-------------------------------------------'); // for title
deleteLastAbsensiSiswa();
console.log(absensi_siswa);

// test delete data absensi pertama
console.log('\n#-------------------------------------------'); // for title
console.log('# Hapus Data Absensi dengan input pertama'); // for title
console.log('#-------------------------------------------'); // for title
deleteFirstAbsensiSiswa();
console.log(absensi_siswa);
console.log('\n'); // for indentation

// test tampilkan data siswa
// dengan single Function
// dan single-join Function
var singleShow = showAbsensiSiswa('single');
var dataSingle = singleShow('Selasa, 06-11-2018', '1A001'); // data valid
console.log('#------------------------'); // for title
console.log('# Informasi Data Detail'); // for title
console.log('#------------------------'); // for title
console.log(dataSingle);

var dataSingleShow = singleShow('Selasa, 06-11-2018', '1K001'); // data invalid
console.log('#---------------------------------------------'); // for title
console.log('# Informasi Data Detail dengan invalid input'); // for title
console.log('#---------------------------------------------'); // for title
console.log(dataSingleShow);
console.log('\n'); // for indentation

var singleJoinShow = showAbsensiSiswa('single-join');
var dataSingleJoin = singleJoinShow('Selasa, 06-11-2018', '1A001'); // data valid
console.log('#--------------------'); // for title
console.log('# Informasi Data Join'); // for title
console.log('#--------------------'); // for title
console.log(dataSingleJoin);
console.log(); // for indentation


// test update data absensi siswa
//  'Senin, 05-11-2018', '1B001', 'Masruq', '1A', 'H' -> Hadir
// jadi:  'Senin, 05-11-2018', '1B001', 'Masruq', '1A', 'S' -> Sakit
console.log('#--------------------'); // for title
console.log('# Update Absensi'); // for title
console.log('#--------------------'); // for title
var updateSiswa = updateAbsensiSiswa('Senin, 05-11-2018', '1B001', 'S');
console.log(updateSiswa);

// tampilkan data siswa keseluruhan
// dnegan defaul function
var DataShow = showAbsensiSiswa();
var dataAll = DataShow(absensi_siswa);
console.log(dataAll);
