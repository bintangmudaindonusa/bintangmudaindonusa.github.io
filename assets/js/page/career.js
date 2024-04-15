// KARIR
const dataKarir = [
  {
    id: "staflapangan",
    jabatan: "Staf Lapangan",
    deskripsi: `<div class="row px-2">
                    <div class="col-md-6 mb-2">
                        <span class="text-primary d-block"><strong>Deskripsi Pekerjaan :</strong></span>
                        <span class="text-primary d-block text-justify">Menawarkan produk serta menjalin dan membina hubungan positif antara perusahaan dengan pelanggan, masyarakat, investor, dan stakeholders yang terlibat dalam bisnis. Memahami kebutuhan pelanggan, menginvestigasi isu atau masalah pelanggan, serta melakukan komunikasi internal perusahaan</span>
                    </div>
                    <div class="col-md-6 mb-2">
                        <span class="text-primary d-block"><strong>Wilayah penempatan :</strong></span>
                        <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Manado</span>
                        <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Tomohon</span>
                        <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Tondano</span>
                        <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Bitung</span>
                        <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Kotamobagu</span>
                        <span class="text-primary d-block"><i class="bi bi-geo-alt mr-1"></i>Gorontalo</span>
                    </div>
                    <div class="col-md-6 mb-2">
                        <span class="text-primary d-block"><strong>Syarat & Berkas Lamaran :</strong></span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>Pria / Wanita</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>Umur Maksimal 35 Tahun</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>e-KTP</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>Kartu Keluarga</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>Ijasah Terakhir</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>CV</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>Surat Lamaran</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>Memiliki Kendaraan Pribadi</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>SIM Aktif</span>
                        <span class="text-primary d-block"><i class="bi bi-dash mr-1"></i>Memiliki Smartphone (Android / IOS)</span>
                    </div>
                    <div class="col-md-6 mb-2">
                        <span class="text-primary d-block"><strong>Benefit :</strong></span>
                        <span class="text-primary d-block"><i class="bi bi-star mr-1"></i>Gaji (Sistem Allowance)</span>
                        <span class="text-primary d-block"><i class="bi bi-star mr-1"></i>Insentif</span>
                        <span class="text-primary d-block"><i class="bi bi-star mr-1"></i>THR</span>
                        <span class="text-primary d-block"><i class="bi bi-star mr-1"></i>Asuransi Tenaga Kerja</span>
                        <span class="text-primary d-block"><i class="bi bi-star mr-1"></i>Trip Luar Negeri</span>
                    </div>
                </div>`,
  },
];

const accordionKarir = document.querySelector("#accordionKarir");
let cardKarir = "";
dataKarir.forEach((krr) => {
  cardKarir += `<div class="card border m-0">
                    <div class="card-header bg-white shadow-sm p-1" id="heading${krr.id}">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left text-primary" type="button" data-toggle="collapse" data-target="#collapse${krr.id}" aria-expanded="true" aria-controls="collapse${krr.id}"><strong>${krr.jabatan}</strong></button>
                        </h2>
                    </div>
                    <div id="collapse${krr.id}" class="collapse" aria-labelledby="heading${krr.id}" data-parent="#accordionKarir">
                        <div class="card-body p-2">${krr.deskripsi}</div>
                        <a href="#" target="_blank" class="m-2 btn btn-sm btn-primary float-right shadow-sm linkLamaranTelepon text-white rounded-0" data-posisi="${krr.jabatan}"><i class="bi bi-send mr-1"></i>Kirim Lamaran</a>
                    </div>
                </div>`;
});
accordionKarir.innerHTML = cardKarir;
