// GENERAL FUNCTION
// Format Tanggal Indonesia
function formatTanggal(date) {
  let waktu = new Date(date);
  let hr = waktu.getDay();
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let hari = namaHari[hr];
  let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
  let bln = waktu.getMonth();
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let bulan = namaBulan[bln];
  let thn = waktu.getFullYear();

  return `${hari}, ${tgl} ${bulan} ${thn}`;
}

// UCWORD
function ucword(text) {
  return text[0].toUpperCase() + text.substring(1);
}

// Format Angka
function angka(number) {
  return number.toLocaleString("id-ID");
}

// URL CODE
let urlEnter = "%0D%0A";

// END GENERAL FUNCTION

// DATA PERUSAHAAN
var namaPerusahaan = "Bintang Muda Indonusa";
var nibPerusahaan = "2102240027329";
var dataAlamat =
  "Jln. Ahmad Yani, Kel. Sario Tumpaan, Sario, Manado, Sulawesi Utara 95114";
var dataLinkAlamat = "https://maps.app.goo.gl/W9JZyrpTiToEduSC8";
var dataEmbedAlamat =
  "https://www.google.com/maps/embed?pb=!4v1712330985903!6m8!1m7!1sBZ8rYGiqWV8nQbi3j6L-ug!2m2!1d1.464865468715683!2d124.8301735029111!3f106.98!4f-1.0499999999999972!5f0.7820865974627469";
var dataTelepon = "82292220994";
var dataEmail = "bintangmudaindonusa@gmail.com";
var dataFacebook = "61557873582039";
var dataInstagram = "";
var dataTiktok = "bintangmudaindonusa";
var dataYoutube = "bintangmudaindonusa";
var versiApp = "1.1.24"; // nomor versi : nomor batch : tahun
var versiWeb = "Online"; // Developer / Online
// let pathWeb = "/bintang-muda-indonusa/";
let pathWeb = "/";

// CEK VERSI WEB
// if(versiWeb === "Developer"){
//   window.location.href = 'comming-soon.html';
// }

// NAVBAR
// NAV TOP
let navTop = document.querySelector(".navTop");
let navBottom = document.querySelector(".navBottom");
let footer = document.querySelector("footer");

function renderNavbar() {
  navTop.innerHTML = `
    <div class="container">
      <div class="collapse navbar-collapse navMenu justify-content-between">
        <div class="d-flex justify-content-start pt-1 pt-lg-0">
          <img src="assets/img/flag-id.svg" alt="Indonesia" class="btn-image rounded mr-1">
          <span class="text-white">Indonesia</span>
        </div>
        <div class="py-1 d-flex align-items-center justify-content-end">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item">
              <a href="#" class="text-small nav-link px-2 tanggalHariIni">Tanggal</a>
            </li>
            <li class="nav-item">
              <a href="#" class="text-small nav-link px-2">Versi
                <span class="d-none d-sm-inline-block badge badge-success versiAplikasi"></span>
              </a>
            </li>
          </ul>
          <a href="sign-in.html" class="btn btn-primary btn-sm d-none">Masuk</a>
        </div>
      </div>
  </div>
  `;

  navBottom.innerHTML = `<div class="container">
                          <a class="h3 m-0 text-primary" href="/"><img src="assets/img/logo4.png" width="50px" alt="Logo" class="rounded-circle"><strong>${namaPerusahaan}</strong></a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse justify-content-end navMenu">
                            <ul class="navbar-nav" id="navMenu"></ul>
                          </div>
                        </div>
  `;
}

function renderFooter() {
  footer.innerHTML = `<div class="container">
                        <div class="row">
                          <div class="col-6 col-md-3 mb-md-0">
                            <img src="assets/img/logo.png" alt="Logo" width="150px" class="mb-2">
                            <ul class="list-unstyled" id="footerMenu"></ul>
                          </div>
                          <div class="col-6 col-md-3 mb-md-0">
                            <h5 class="text-white"><strong>PRODUK &amp; LAYANAN</strong></h5>
                            <ul class="list-unstyled">
                              <li class="py-0 py-md-1"><a href="layanan.html" class="text-white">Dokumen Sipil</a></li>
                              <li class="py-0 py-md-1"><a href="layanan.html" class="text-white">Wajib Pajak</a></li>
                              <li class="py-0 py-md-1"><a href="layanan.html" class="text-white">Keuangan</a></li>
                            </ul>
                          </div>
                          <div class="col-6 col-md-3 mb-md-0">
                            <h5 class="text-white"><strong>BANTUAN &amp; DUKUNGAN</strong></h5>
                            <ul class="list-unstyled">
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkWhatsapp">Hubungi Kami</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkAlamat">Lokasi Kantor</a></li>
                              <li class="py-0 py-md-1"><a href="#" class="text-white urlHide">Informasi Penting</a></li>
                              <li class="py-0 py-md-1"><a href="#" class="text-white urlHide">Forum Tanya Jawab</a></li>
                            </ul>
                          </div>
                          <div class="col-6 col-md-3 mb-md-0">
                            <h5 class="text-white"><strong>SOSIAL MEDIA</strong></h5>
                            <ul class="list-unstyled">
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkWhatsapp targetBlank"><i class="bi bi-whatsapp mr-1"></i> WhatsApp</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkFacebook targetBlank"><i class="bi bi-facebook mr-1"></i> Facebook</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkInstagram targetBlank"><i class="bi bi-instagram mr-1"></i> Instagram</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkTiktok targetBlank"><i class="bi bi-tiktok mr-1"></i> Tiktok</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkYoutube targetBlank"><i class="bi bi-youtube mr-1"></i> Youtube</a></li>
                            </ul>
                          </div>
                        </div>
                        <p class="text-small text-white m-0">
                          <span class="opacity-50">
                            <i class="bi bi-c-circle"></i>
                            <span class="spanTahun"></span>
                          </span>
                          <strong class="text-small text-white">PT. 
                            <span class="text-uppercase spanNama"></span>
                          </strong>
                        </p>
                        <p class="text-small text-white m-0"><i class="bi bi-geo-alt"></i> ${dataAlamat}</p>
                      </div>`;
}

function renderMenu() {
  const navMenu = document.querySelector("#navMenu");
  const footerMenu = document.querySelector("#footerMenu");
  let isiNavMenu = "";
  let isiFooterMenu = "";

  const dataMenu = [
    {
      judul: "Produk & Layanan",
      link: "services.html",
    },
    {
      judul: "Tentang Kami",
      link: "about.html",
    },
    {
      judul: "Kontak",
      link: "contact.html",
    },
    {
      judul: "Berita",
      link: "news.html",
    },
  ];

  dataMenu.forEach((mn) => {
    if (pathWeb + mn.link == window.location.pathname) {
      isiNavMenu += `<li class="nav-item"><a class="nav-link active text-primary h5" href="${mn.link}"><strong><u>${mn.judul}</u></strong></a></li>`;
    } else {
      isiNavMenu += `<li class="nav-item"><a class="nav-link h5" href="${mn.link}">${mn.judul}</a></li>`;
    }
    isiFooterMenu += `<li class="py-0 py-md-1"><a href="${mn.link}" class="text-white">${mn.judul}</a></li>`;
  });

  navMenu.innerHTML = isiNavMenu;
  footerMenu.innerHTML = isiFooterMenu;
}

renderNavbar();
renderFooter();
renderMenu();

// NAMA & NIB DINAMIS
let spanNama = document.querySelectorAll(".spanNama");
let spanNib = document.querySelectorAll(".spanNib");
let spanTelepon = document.querySelectorAll(".spanTelepon");
let linkWhatsapp = document.querySelectorAll(".linkWhatsapp");
let linkJanjiWhatsapp = document.querySelectorAll(".linkJanjiWhatsapp");
let linkLamaranWhatsapp = document.querySelectorAll(".linkLamaranWhatsapp");
let spanEmail = document.querySelectorAll(".spanEmail");
let spanAlamat = document.querySelectorAll(".spanAlamat");
let linkAlamat = document.querySelectorAll(".linkAlamat");
let linkFacebook = document.querySelectorAll(".linkFacebook");
let linkInstagram = document.querySelectorAll(".linkInstagram");
let linkTiktok = document.querySelectorAll(".linkTiktok");
let linkYoutube = document.querySelectorAll(".linkYoutube");
let iframeAlamat = document.querySelectorAll(".iframeAlamat");
// Nama
spanNama.forEach((spnm) => {
  spnm.innerText = namaPerusahaan;
});
// NIB
spanNib.forEach((spni) => {
  spni.innerText = nibPerusahaan;
});
// Telepon
spanTelepon.forEach((sptl) => {
  sptl.innerText = `+62${dataTelepon}`;
});
// Telepon / WhatsApp
// Universal
linkWhatsapp.forEach((lkwa) => {
  let textWa = `Hi admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin bertanya sesuatu`;
  lkwa.setAttribute("href", `https://wa.me/62${dataTelepon}?text=${textWa}`);
});
// Buat Janji
linkJanjiWhatsapp.forEach((ljwa) => {
  let textJanjiWa = `Hi admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin membuat janji temu pada${urlEnter}Hari / Tanggal :${urlEnter}Jam :${urlEnter}Tempat :${urlEnter}Apakah bersedia?`;
  ljwa.setAttribute("href", `https://wa.me/62${dataTelepon}?text=${textJanjiWa}`);
});
// Lamaran Kerja
linkLamaranWhatsapp.forEach((llwa) => {
  let dataPosisi = llwa.getAttribute("data-posisi");
  let textLamaranWa = `Hi admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin mengirim berkas lamaran untuk posisi : *${dataPosisi}*`;
  llwa.setAttribute("href", `https://wa.me/62${dataTelepon}?text=${textLamaranWa}`);
});
// Email
spanEmail.forEach((spem) => {
  spem.innerText = dataEmail;
});
// Alamat
spanAlamat.forEach((spal) => {
  spal.innerText = dataAlamat;
});
linkAlamat.forEach((lkal) => {
  lkal.setAttribute("href", dataLinkAlamat);
});
iframeAlamat.forEach((ifal) => {
  ifal.setAttribute("src", dataEmbedAlamat);
});
// Facebook
linkFacebook.forEach((lkfb) => {
  lkfb.setAttribute("href", `https://facebook.com/profile.php?id=${dataFacebook}`);
});
// Instagram
linkInstagram.forEach((lkig) => {
  lkig.setAttribute("href", `https://instagram.com/${dataInstagram}`);
});
// Tiktok
linkTiktok.forEach((lktt) => {
  lktt.setAttribute("href", `https://tiktok.com/@${dataTiktok}`);
});
// Youtube
linkYoutube.forEach((lkyt) => {
  lkyt.setAttribute("href", `https://youtube.com/@${dataYoutube}`);
});

// WAKTU
let tanggalHariIni = document.querySelectorAll(".tanggalHariIni");
let versiAplikasi = document.querySelectorAll(".versiAplikasi");
let spanTahun = document.querySelectorAll(".spanTahun");
// Versi
versiAplikasi.forEach((vApp) => {
  if (versiWeb == "Developer") {
    vApp.innerHTML = `${versiApp} (Beta)`;
  } else {
    vApp.innerHTML = versiApp;
  }
});

// Judul web
document.title = namaPerusahaan;
setInterval(() => {
  let waktu = new Date();
  let hr = waktu.getDay();
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let hari = namaHari[hr];
  let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
  let bln = waktu.getMonth();
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let bulan = namaBulan[bln];
  let thn = waktu.getFullYear();
  let jam = waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
  let menit =
    waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
  let detik =
    waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
  tanggalHariIni.forEach((tglHr) => {
    tglHr.innerHTML = `${hari}, ${tgl} ${bulan} ${thn} - ${jam} : ${menit} : ${detik} WITA`;
  });
  spanTahun.forEach((spth) => {
    spth.innerHTML = thn;
  });
}, 1);

// Hide Link Status
$(function(){
  $(".urlHide").each(function (index, element) {
    var href = $(this).attr("href");
    $(this).attr("hiddenhref", href);
    $(this).removeAttr("href");
  });
  $(".targetBlank").each(function (index, element) {
    var href = $(this).attr("href");
    $(this).attr("hiddenhref", href);
    $(this).removeAttr("href");
  });
    $(".targetBlank").click(function () {
      url = $(this).attr("hiddenhref");
      window.open(url);
    });
});
