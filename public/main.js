const tombolHitung = document.getElementById("tombol-hitung");
const tombolReset = document.getElementById("tombol-reset");

function hitungRealTime()  {
    let jarak = parseFloat(document.getElementById("input-jarak").value) || 0;
    let koefKendaraan = parseFloat(document.getElementById("input-kendaraan").value) || 0;
    let ac = parseFloat(document.getElementById("input-ac").value) || 0;
    let laptop = parseFloat(document.getElementById("input-laptop").value) || 0;

    let totalEmisi = (jarak * koefKendaraan) + (ac * 0.5) + (laptop * 0.05);

    document.getElementById("angka-hasil").innerText = totalEmisi.toFixed(2);

    if (totalEmisi<=2){
        document.body.style.backgroundColor = "#d4ffde";
    }else if(totalEmisi<=5){
        document.body.style.backgroundColor = "#fff3cd";
    }else {
        document.body.style.backgroundColor = "#f8d7da";
    }
};

document.getElementById("tombol-hitung").addEventListener("click", hitungRealTime);
document.getElementById("input-jarak").addEventListener("input", hitungRealTime);
document.getElementById("input-kendaraan").addEventListener("input", hitungRealTime);
document.getElementById("input-ac").addEventListener("input", hitungRealTime);
document.getElementById("input-laptop").addEventListener("input", hitungRealTime);

tombolReset.addEventListener("click", function() {
    document.getElementById("input-jarak").value = "";
    document.getElementById("input-ac").value = "";
    document.getElementById("input-laptop").value = "";
    document.getElementById("input-kendaraan").value = "0.1";    
    document.getElementById("angka-hasil").innerText = "0";
    document.body.style.backgroundColor = "";
});

const semuaCheckbox = document.querySelectorAll(".tip-checkbox");
const teksMotivasi = document.getElementById("teks-motivasi");

semuaCheckbox.forEach(function(checkbox) {
    
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            this.parentElement.classList.add("dicentang");
        } else {
            this.parentElement.classList.remove("dicentang");
        }

        let jumlahDicentang = document.querySelectorAll(".tip-checkbox:checked").length;
        if (jumlahDicentang === 0) {
            teksMotivasi.innerText = "Ayo mulai lakukan aksi nyata untuk bumi kita!";
        } else if (jumlahDicentang <= 2) {
            teksMotivasi.innerText = `Sip! Kamu sudah melakukan ${jumlahDicentang} aksi nyata. Lanjutkan!`;
        } else if (jumlahDicentang <= 4) {
            teksMotivasi.innerText = `mantep! ${jumlahDicentang} aksi kamu lakukan.`;
        } else if (jumlahDicentang === 5) {
            teksMotivasi.innerText = "Kerenn, Kamu pahlawan bumi! 🌍💚";
        }
    });
});
