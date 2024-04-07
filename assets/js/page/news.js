async function apiBerita() {
    let resMedia = await fetch("https://api-berita-indonesia.vercel.app/");
    let dataMedia = await resMedia.json();
    const tabBerita = document.querySelector("#v-pills-tab");
    let navLinkBerita = '';
    const tabContentBerita = document.querySelector("#v-pills-tabContent");
    let tabPaneBerita = '';
    dataMedia.endpoints.forEach(async (md, i) => {
        navLinkBerita += `<button class="nav-link bg-white text-primary border-0 mb-2 text-left text-uppercase shadow" id="v-pills-${md.name}-tab" data-toggle="pill" data-target="#v-pills-${md.name}" type="button" role="tab" aria-controls="v-pills-${md.name}" aria-selected="true">${md.name}</button>`;

        let linkBerita = md.paths[0].path;
        let resBerita = await fetch(linkBerita);
        let dataBerita = await resBerita.json();

        if (dataBerita.data !== null) {
            let beritaJudul = dataBerita.data.title;
            let beritaDes = dataBerita.data.description;
            let beritaLink = dataBerita.data.link;
            let beritaGambar = dataBerita.data.image || "../assets/img/logo2.png";
            
            tabPaneBerita += `<div class="tab-pane fade show ${i == 0 ? 'active' :  ''}" id="v-pills-${md.name}" role="tabpanel" aria-labelledby="v-pills-${md.name}-tab">
                                <div class="card shadow">
                                    <div class="card-header p-2 bg-white text-primary d-flex justify-content-start align-items-center shadow-sm">
                                        <img src="${beritaGambar}" width="75px" alt="Logo">
                                        <div class="d-flex flex-column ml-1">
                                            <strong>${beritaJudul}</strong>
                                            <small>${beritaDes}</small>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="row justify-content-center">`;
            dataBerita.data.posts.forEach((pst) => {
              let postThumb = pst.thumbnail || "assets/img/logo2.png";
              let postTanggal = pst.pubDate.slice(0, 10);
              let postJam = pst.pubDate.slice(11, 19);
              let postJudul = pst.title;
              let postLink = pst.link;
              let postDes = pst.description;
              tabPaneBerita += `<div class="col-md-6 col-lg-4 d-flex">
                                  <div class="card m-0 mb-3 shadow">
                                      <a href="${postLink}" target="_blank"><img class="card-img-top" src="${postThumb}" alt="${postJudul}"></a>
                                      <div class="card-body p-3">
                                          <small class="mb-2 d-block">${postTanggal} ${postJam}</small>
                                          <h5><a href="${postLink}" target="_blank" class="text-primary"><strong>${postJudul}</strong></a></h5>
                                          <p class=" mb-0">${postDes}</p>
                                      </div>
                                  </div>
                              </div>`;
            });
            tabPaneBerita += `</div>
                            </div>
                        </div>
                    </div>`;
            
        }
        tabContentBerita.innerHTML = tabPaneBerita;
    });
    tabBerita.innerHTML = navLinkBerita;
}

apiBerita();
