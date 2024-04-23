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
var dataLinkAlamat = "https://maps.app.goo.gl/gthtb8mBsmWZ8fU99";
var dataEmbedAlamat =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5143761243467!2d124.8302449!3d1.4648812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328775379d4996ff%3A0xcd5f97c4c108145!2sPT.%20BINTANG%20MUDA%20INDONUSA!5e0!3m2!1sid!2sid!4v1713209637382!5m2!1sid!2sid";
var dataTelepon = "82292220994";
var dataWhatsapp = "7JQNMQX2GUXBJ1";
var dataEmail = "bintangmudaindonusa@gmail.com";
var dataFacebook = "bintangmudaindonusa";
var dataInstagram = "bintang_muda_indonusa";
var dataTiktok = "bintangmudaindonusa";
var dataYoutube = "bintangmudaindonusa";
var dataLinkedin = "bintangmudaindonusa";
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
                              <li class="py-0 py-md-1"><a href="services.html" class="text-white">Dokumen Sipil</a></li>
                              <li class="py-0 py-md-1"><a href="services.html" class="text-white">Wajib Pajak</a></li>
                              <li class="py-0 py-md-1"><a href="services.html" class="text-white">Keuangan</a></li>
                            </ul>
                          </div>
                          <div class="col-6 col-md-3 mb-md-0">
                            <h5 class="text-white"><strong>BANTUAN &amp; DUKUNGAN</strong></h5>
                            <ul class="list-unstyled">
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkWhatsapp">Hubungi Kami</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkAlamat">Lokasi Kantor</a></li>
                              <li class="py-0 py-md-1"><a href="#" class="text-white urlHide">Informasi Penting</a></li>
                              <li class="py-0 py-md-1"><a href="#" class="text-white urlHide">Forum Tanya Jawab</a></li>
                            </ul>
                          </div>
                          <div class="col-6 col-md-3 mb-md-0">
                            <h5 class="text-white"><strong>SOSIAL MEDIA</strong></h5>
                            <ul class="list-unstyled">
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkWhatsapp "><i class="bi bi-whatsapp mr-1"></i> WhatsApp</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkFacebook "><i class="bi bi-facebook mr-1"></i> Facebook</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkInstagram "><i class="bi bi-instagram mr-1"></i> Instagram</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkTiktok "><i class="bi bi-tiktok mr-1"></i> Tiktok</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkYoutube "><i class="bi bi-youtube mr-1"></i> Youtube</a></li>
                              <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white targetBlank linkLinkedin "><i class="bi bi-linkedin mr-1"></i> LinkedIn</a></li>
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
let spanWhatsapp = document.querySelectorAll(".spanWhatsapp");
let linkTelepon = document.querySelectorAll(".linkTelepon");
let linkJanjiTelepon = document.querySelectorAll(".linkJanjiTelepon");
let linkLamaranTelepon = document.querySelectorAll(".linkLamaranTelepon");
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
let linkLinkedin = document.querySelectorAll(".linkLinkedin");
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
// Link Universal
spanTelepon.forEach((sptl) => {
  sptl.innerText = `+62${dataTelepon}`;
});
linkTelepon.forEach((lktl) => {
  let textTel = `Hi Admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin bertanya sesuatu`;
  lktl.setAttribute("href", `https://wa.me/62${dataTelepon}?text=${textTel}`);
});
// Buat Janji
linkJanjiTelepon.forEach((ljtl) => {
  let textJanjiTel = `Hi Admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin membuat janji temu pada${urlEnter}Hari / Tanggal :${urlEnter}Jam :${urlEnter}Tempat :${urlEnter}Apakah bersedia?`;
  ljtl.setAttribute("href", `https://wa.me/62${dataTelepon}?text=${textJanjiTel}`);
});
// Lamaran Kerja
linkLamaranTelepon.forEach((lltl) => {
  let dataPosTel = lltl.getAttribute("data-posisi");
  let textLamaranTel = `Hi Admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin mengirim berkas lamaran untuk posisi : *${dataPosTel}*`;
  lltl.setAttribute("href", `https://wa.me/62${dataTelepon}?text=${textLamaranTel}`);
});
// WhatsApp
// Universal
spanWhatsapp.forEach((spwa) => {
  spwa.innerText = `Chat WhatsApp`;
});
linkWhatsapp.forEach((lkwa) => {
  let textWa = `Hi Admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin bertanya sesuatu`;
  lkwa.setAttribute("href", `https://wa.me/message/${dataWhatsapp}?text=${textWa}`);
});
// Buat Janji
linkJanjiWhatsapp.forEach((ljwa) => {
  let textJanjiWa = `Hi Admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin membuat janji temu pada${urlEnter}Hari / Tanggal :${urlEnter}Jam :${urlEnter}Tempat :${urlEnter}Apakah bersedia?`;
  ljwa.setAttribute("href", `https://wa.me/message/${dataWhatsapp}?text=${textJanjiWa}`);
});
// Lamaran Kerja
linkLamaranWhatsapp.forEach((llwa) => {
  let dataPosWa = llwa.getAttribute("data-posisi");
  let textLamaranWa = `Hi Admin *PT. Bintang Muda Indonusa*,${urlEnter}${urlEnter}Nama Saya :${urlEnter}${urlEnter}Saya ingin mengirim berkas lamaran untuk posisi : *${dataPosWa}*`;
  llwa.setAttribute("href", `https://wa.me/message/${dataWhatsapp}?text=${textLamaranWa}`);
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
  lkfb.setAttribute("href", `https://facebook.com/${dataFacebook}`);
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
// LinkedIn
linkLinkedin.forEach((lkli) => {
  lkli.setAttribute("href", `https://www.linkedin.com/company/${dataLinkedin}`);
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
