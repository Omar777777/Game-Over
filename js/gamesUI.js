let arrayOfGames = [];

export class fetchGames {
    constructor(category) {
        this.category = category;
        
    }
    async getGame() {

         const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '054f5b29cemshb514dbefb2dbfdfp131316jsn3a68c9e2f851',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`, options);
        if (api.ok) {
            document.querySelector('.loader-container').classList.replace('d-flex', 'd-none');
            document.body.classList.replace('overflow-hidden','overflow-auto');
        }
        else {
            document.querySelector('.loader-container').classList.replace('d-none', 'd-flex');
            document.body.classList.replace('overflow-auto','overflow-hidden');
            
        }
        let gameList = await api.json();
        arrayOfGames = gameList;
        return arrayOfGames;
    }

    displayGames() {

        let cartona = ``;
        for (let i = 0; i < arrayOfGames.length; i++){
            cartona = cartona +
            `<div class="col-xl-3 col-lg-4 col-md-6 selected-card">

                    <div class="card pt-3 position-relative">
                     <div class="layer position-absolute top-0 bottom-0 start-0 end-0">${arrayOfGames[i].id}</div>
        
        
                        <div class="w-100">
        
                            <div class="thumbnail-box pe-3 ps-3">
                                <img src="${arrayOfGames[i].thumbnail}" class="card-img-top w-100" alt="Game Photo">
                            </div>
        
                        </div>
        
        
                        <div class="card-body pe-3 ps-3">
                            <div class="card-title-button-container d-flex justify-content-between">
        
                                <p class="card-title">${arrayOfGames[i].title}</p>
                                <button class="btn btn-primary text-white p-2 my-btn">Free</button>
        
                            </div>
        
                            <p class="card-text text-center">${arrayOfGames[i].short_description}</p>
                        </div>
                        <footer class=" d-flex justify-content-between pe-3 ps-3">
                            <p class="my-p">${arrayOfGames[i].genre}</p>
                            <p class="my-p">${arrayOfGames[i].platform}</p>
                        </footer>
                    </div>
        
                </div>`;
        }

        document.getElementById('GamesContainer').innerHTML = cartona;
    }



}