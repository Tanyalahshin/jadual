var lastInsertedTime = -1;
var lastInsertedDay = -1;
var firstDay = -1;
var bilangan = 1; // Bilangan pertama

function convertToMinutes(time) {
    var splitTime = time.split(':');
    var hours = parseInt(splitTime[0]);
    var minutes = parseInt(splitTime[1]);
    return hours * 60 + minutes;
}

function tambahData() {
    var inputHari = parseInt(document.getElementById('inputHari').value);
    var inputWaktu = parseInt(document.getElementById('inputWaktu').value);
    var inputDarah = document.getElementById('inputDarah').value;
    var table = document.getElementById('dataDarah');

    // Validasi dan penambahan data ke dalam tabel pertama
    // (Sesuaikan dengan logika yang kamu perlukan)
    if (inputHari < lastInsertedDay || (inputHari === lastInsertedDay && inputWaktu <= lastInsertedTime)) {
        alert("Masukkan nilai yang sama atau lebih besar dari sebelumnya untuk Hari dan Jam.");
        return;
    }
    if (isNaN(inputHari) || inputHari < 1) {
        inputHari = lastInsertedDay + 1;
    }
    if (isNaN(inputWaktu) || inputWaktu < 0 || inputWaktu > 23) {
        inputWaktu = lastInsertedTime;
    }

    var jamHari = inputHari * 24 + inputWaktu;
    var jamHariKurang = jamHari - 24;
    if (jamHariKurang < 0) {
        jamHariKurang += 24;
    }

    var row = table.insertRow(-1);
    var cellBilangan = row.insertCell(0);
    var cellHariJam = row.insertCell(1);
    var cellJam = row.insertCell(2);
    var cellJamHariKurang = row.insertCell(3);
    var cellDarah = row.insertCell(4);
    cellBilangan.innerHTML = bilangan++;
    cellHariJam.innerHTML = inputHari + ":" + inputWaktu.toString().padStart(2, '0');
    cellJam.innerHTML = jamHari;
    cellJamHariKurang.innerHTML = jamHariKurang;
    cellDarah.innerHTML = inputDarah;

    if (firstDay === -1) {
        firstDay = inputHari;
    }
    lastInsertedDay = inputHari;
    lastInsertedTime = inputWaktu;

    // Memanggil fungsi dari jadual2.js untuk menambah data ke tabel kedua
    if (table.rows.length > 1) {
        tambahDataKedua();
    }
}

// ... (fungsi-fungsi lain yang diperlukan)
