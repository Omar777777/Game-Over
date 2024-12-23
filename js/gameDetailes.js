let Deatailes;


export class gameDetailes {
    constructor(id) {
        this.id = id;   
    }

    async getDetailes() {

    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '054f5b29cemshb514dbefb2dbfdfp131316jsn3a68c9e2f851',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
        };
        
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);

         if (api.ok) {
            document.querySelector('.loader-container').classList.replace('d-flex', 'd-none');
            // document.body.classList.replace('overflow-hidden','overflow-auto');
        }
        else {
            document.querySelector('.loader-container').classList.replace('d-none', 'd-flex');
            document.body.classList.replace('overflow-auto','overflow-hidden');
            
        }
        
        let jsonApi = await api.json();
        Deatailes = jsonApi;
        return Deatailes;
    }

    desplayDetailes() {
        let cartona = ``;

        cartona = cartona + `
              <nav class="navbar navbar-expand-lg bg-body-tertiary   col-md-8 col-lg-9  mx-auto Detailes-nav">
                <div class="container">
                    <a class="navbar-brand text-decoration-none mylogo"><span>Detailes Game</span></a>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <button type="button" class="btn-close" id="close" aria-label="Close"></button>
                    </ul>
                </div>
            </nav>
            <div class="container mt-5">
                <div class="row">
        
                    <div class="col-lg-5">
                        <img src="${Deatailes.thumbnail}" alt="photo Game" class="w-100">
                    </div>
        
                    <div class="col-lg-7 desc-text">
                        <h2 class="text-white">${Deatailes.title}</h2>
                        <h5 class="mt-3 text-white">category: <span>${Deatailes.genre}</span></h5>
                        <h5 class="mt-3 text-white">Platform: <span>${Deatailes.platform}</span></h5>
                        <h5 class="mt-3 text-white">Status: <span>${Deatailes.status}</span></h5>
        
                        <p class="mt-4 text-white">${Deatailes.description}</p>
        
                        <a href="${Deatailes.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
        
                    </div>
                </div>
            </div>`;
        

        document.getElementById('SpecificeGame').innerHTML = cartona;
    }
}