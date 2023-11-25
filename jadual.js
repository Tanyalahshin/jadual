// jadual2.js

function tambahDataKedua() {
    var table = document.getElementById('dataDarahKedua');
    var table1 = document.getElementById('dataDarah');

    var rowCount = table1.rows.length;

    if (rowCount > 1) {
        var lastRowTable1 = table1.rows[rowCount - 1];
        var bilangan = lastRowTable1.cells[0].innerHTML;
        var warnaDarah = lastRowTable1.cells[4].innerHTML;
        var jamAwal = lastRowTable1.cells[2].innerHTML;
        var jamAkhir = lastRowTable1.cells[3].innerHTML;

        var row = table.insertRow(-1);
        var cellBilangan = row.insertCell(0);
        var cellWarnaDarah = row.insertCell(1);
        var cellJamAwal = row.insertCell(2);
        var cellJamAkhir = row.insertCell(3);
        // Kolom-kolom lainnya
        var cellInfoTambahan = row.insertCell(4);
        var cellStatus = row.insertCell(5);

        cellBilangan.innerHTML = bilangan;
        cellWarnaDarah.innerHTML = warnaDarah;
        cellJamAwal.innerHTML = jamAwal;
        cellJamAkhir.innerHTML = jamAkhir;
        // Mengisi kolom-kolom lainnya sesuai kebutuhan
        cellInfoTambahan.innerHTML = "Info Tambahan";
        cellStatus.innerHTML = "Status";
    }
}
