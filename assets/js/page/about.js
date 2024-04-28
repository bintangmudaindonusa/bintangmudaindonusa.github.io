// TIM
const dataKaryawan = [
  {
    nama: "Roni Pilohima",
    foto: "roni.png",
    jabatan: "Direktur, CEO",
    sosmed: "person-vcard", // icon : whatsapp facebook instagram tiktok youtube email
    linkSosmed: "user/roni/index.html",
  },
  {
    nama: "Thiofilus M. Koho",
    foto: "thiofilus.png",
    jabatan: "Admin Officer",
    sosmed: "person-vcard", // icon : whatsapp facebook instagram tiktok youtube email
    linkSosmed: "user/thio/index.html",
  },
  {
    nama: "Chamdani P. Yudho",
    foto: "chamdani.png",
    jabatan: "Branch Relation Officer",
    sosmed: "person-vcard", // icon : whatsapp facebook instagram tiktok youtube email
    linkSosmed: "user/cham/index.html",
  },
  {
    nama: "Brian Y. Pasla",
    foto: "brian.png",
    jabatan: "Branch Relation Officer",
    sosmed: "person-vcard", // icon : whatsapp facebook instagram tiktok youtube email
    linkSosmed: "user/brian/index.html",
  },
  {
    nama: "Rahmat Palowa",
    foto: "rahmat.png",
    jabatan: "Branch Relation Officer",
    sosmed: "person-vcard", // icon : whatsapp facebook instagram tiktok youtube email
    linkSosmed: "user/rahmat/index.html",
  },
  {
    nama: "Indra Hamisi",
    foto: "",
    jabatan: "Branch Relation Officer",
    sosmed: "person-vcard", // icon : whatsapp facebook instagram tiktok youtube email
    linkSosmed: "user/indra/index.html",
  },
  {
    nama: "Ruslan D. Samuel",
    foto: "ruslan2.png",
    jabatan: "Admin Support Media",
    sosmed: "person-vcard", // icon : whatsapp facebook instagram tiktok youtube email
    linkSosmed: "user/ulan/index.html",
  },
];

const rowKaryawan = document.querySelector("#rowKaryawan");
let colKaryawan = "";
dataKaryawan.forEach((kry) => {
    let fotoProfil = kry.foto || 'user-profil.png';
    colKaryawan += `<div class="col-md-4 col-xl-3 d-flex">
                        <div class="card shadow border">
                            <img class="card-img-top" src="assets/img/hrd/${fotoProfil}" alt="${kry.nama}">
                            <div class="card-body py-3">
                                <h5 class="mb-0 text-primary"><strong>${kry.nama}</strong></h5>
                                <span>${kry.jabatan}</span>
                            </div>
                            <div class="card-footer">
                                <a href="${kry.linkSosmed}" target="_blank" class="d-block targetBlank text-primary"><i class="bi bi-${kry.sosmed} mr-1"></i>Lihat Kartu Nama</a>
                            </div>
                        </div>
                    </div>`;
});
rowKaryawan.innerHTML = colKaryawan;

// KARIR
const dataKarir = [
  {
    id: "staflapangan",
    jabatan: "Staf Lapangan",
    deskripsi: `<span class="text-primary d-block">Untuk wilayah :</span>
                <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Manado</span>
                <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Tomohon</span>
                <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Tondano</span>
                <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Bitung</span>
                <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Kotamobagu</span>
                <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Gorontalo</span>`,
  },
];

const rowKarir = document.querySelector("#rowKarir");
let colKarir = "";
dataKarir.forEach((krr) => {
  colKarir += `<div class="col-md-4 col-xl-3 d-flex">
                    <div class="card shadow mx-auto">
                        <div class="card-body">
                            <div class="mb-3">
                                <h2 class="h2 text-primary"><strong>${krr.jabatan}</strong></h2>
                                <div>${krr.deskripsi}</div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="career.html" class="text-primary">Selengkapnya</a>
                                <i class="material-icons">keyboard_arrow_right</i>
                            </div>
                        </div>
                    </div>
                </div>`;
});
rowKarir.innerHTML = colKarir;