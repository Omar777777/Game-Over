import { gameDetailes } from "./gameDetailes.js";
import { fetchGames } from "./gamesUI.js";


const navList = document.querySelectorAll('.nav-item a');






let gameID;
let gameCategory = 'mmorpg';
let desplayGamesarray = [];
let newListGames;



window.addEventListener('load',async ()=>{
    newListGames = new fetchGames(gameCategory);
    desplayGamesarray = await newListGames.getGame();
    newListGames.displayGames();

});
 
//To Remove Active Class From anchor Tages
function RemoveActiveFromNavList() {

    for (let i = 0; i < navList.length; i++){
        navList[i].classList.remove('active');
    }
    
}

// To Add Active Class To Clicked anchor Tages
navList.forEach((navigationList) => {
    navigationList.addEventListener('click',async function (e) {
        RemoveActiveFromNavList();
        let navigationItem = e.target;
        navigationItem.classList.add('active');
        document.querySelector('.loader-container').classList.replace('d-none', 'd-flex');
        document.body.classList.add('overflow-hidden');

        gameCategory = navigationItem.innerText.toLowerCase();
        newListGames = new fetchGames(gameCategory);
        desplayGamesarray = await newListGames.getGame();
        newListGames.displayGames();
    })
});





document.addEventListener('click', async function (e) {
    if (e.target.classList[0] == 'layer') {
        document.getElementById('SpecificeGame').classList.replace('d-none', 'd-block');
        document.querySelector('.loader-container').classList.replace('d-none', 'd-flex');
        document.body.classList.add('overflow-hidden');
        gameID = e.target.innerText;
        let detailes = new gameDetailes(gameID);
        let GameD =await detailes.getDetailes();
        detailes.desplayDetailes();

        let close = document.getElementById('close');
       close.addEventListener('click', function (e) {
        document.getElementById('SpecificeGame').classList.replace('d-block', 'd-none');
        document.body.classList.replace('overflow-hidden','overflow-auto');
})
    }

})

