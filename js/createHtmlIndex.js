import { topGamesList, usedGamesList } from "./apiLoops.js";

const gameContainer = document.querySelector(".gameContainer_index")
const sideGamesContainer = document.querySelector(".sideGamesContainer_index")
const topGameContainer = document.querySelector(".gameContainer-topSellers_index")
const usedGameContainer = document.querySelector(".gamesContainer-usedGames_index")


export function containerHtmlIndex(gameDetails){
gameContainer.innerHTML = `
                        <a href="productDetails.html?id=${gameDetails.id}">
                            <section class="GameContainer">
                                <section class="gameContainer-1">
                                    <div class="gameMainImage" style="background-image: url('${gameDetails.mainImg}')"></div>
                                </section>
                                <section class="gameContainer-2">
                                    <h1 class="gameTitle">${gameDetails.name}</h1>
                                    <p class="gameDescription">${gameDetails.description}</p>
                                    <div class="gameGenre">Genres:</div>
                                    <ul class="gameGenres">
                                    ${[gameDetails.genre.genre1, 
                                        gameDetails.genre.genre2, 
                                        gameDetails.genre.genre3, 
                                        gameDetails.genre.genre4].filter(Boolean).map((genre) => `
                                    <li>${genre}</li>`).join(' |')}
                                    </ul>
                                </section>
                                <section class="gameContainer-3">
                                    <div class="gamePlatform">Platforms:</div>
                                    <ul class="gamePlatforms">
                                                ${[gameDetails.platforms.platform1, 
                                                    gameDetails.platforms.platform2, 
                                                    gameDetails.platforms.platform3, 
                                                    gameDetails.platforms.platform4, 
                                                    gameDetails.platforms.platform5, 
                                                    gameDetails.platforms.platform6].filter(Boolean).map((platform) => `
                                                <li>${platform}</li>`).join(' |')}
                                                </ul>
                                    <div class="gamePrice">299.99 NOK</div>
                                </section>
                            </section>
                        </a>`;

for(let i = 0; i < 4; i++){
sideGamesContainer.innerHTML += `
                                <a href="productDetails.html?id=${gameDetails.id}">
                                    <div class="sideContainer">
                                        <div class="sideGameImg" style="background-image: url('${gameDetails.mainImg}')"></div>
                                        <div class="sideGameTitle">${gameDetails.name}</div>          
                                    </div>
                                </a>`;
}
}

let numContainers = 5;

export function generateTopSellersContainer(topGamesList){
let topGamesHtml = '';

    for(let i = 0; i < numContainers; i++){
    topGamesHtml += ` 
                    <a href="productDetails.html?id=${topGamesList[i].id}">
                        <section class="topGameContainer">
                            <div class="topGameImg" style="background-image: url('${topGamesList[i].mainImg}')"></div>
                            <div class="topGameText">
                                <div class="topGameTitle">${topGamesList[i].name}</div>
                                <div class="topGamePrice">300.00 NOK</div>
                            </div>
                        </section>
                    </a>`;
    }
topGameContainer.innerHTML = topGamesHtml;
}

export function generateUsedGamesContainer(usedGamesList){
let usedGamesHtml = '';
    for(let i = 0; i < numContainers; i++){
        usedGamesHtml += `                           
                        <a href="productDetails.html?id=${usedGamesList[i].id}">
                            <section class="subGameContainer">
                                <div class="subGameImg" style="background-image: url('${usedGamesList[i].mainImg}')"></div>
                                <div class="subGameText">
                                        <p class="subGameTitle">${usedGamesList[i].name}</p>
                                        <div class="subGamePriceContainer">
                                            <p class="subGameDiscountPercentage">-30%</p>
                                            <p class="subGameNewPrice">210.00 NOK</p>  
                                            <p class="subGameOldPrice">300.00 NOK</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                         </a>`;
    }
usedGameContainer.innerHTML = usedGamesHtml;
}

function updateContainers(topGamesList, usedGamesList){
    const screenWidth = window.innerWidth;
    if (screenWidth > 500) {
        numContainers = 5;
    }
    if (screenWidth > 750) {
        numContainers = 6;
    }
    if (screenWidth > 1000) {
        numContainers = 6;
    }
    if(screenWidth > 1250){
        numContainers = 8;
    }
    if(screenWidth > 1500){
        numContainers = 10;
    }
    if(screenWidth > 1750){
        numContainers = 12;
    }
    if(screenWidth > 2000){
        numContainers = 7;
    }
    generateTopSellersContainer(topGamesList);
    generateUsedGamesContainer(usedGamesList);
    }
    window.addEventListener('resize', function() {
        updateContainers(topGamesList, usedGamesList);
      });



// function updateContainers(){
//     // generateTopSellersContainer(topGamesList, numContainers);
//     generateUsedGamesContainer(usedGamesList, numContainers);
// }

// window.addEventListener('resize', updateContainers);