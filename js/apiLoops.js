import { generateTopSellersContainer, generateUsedGamesContainer } from "./createHtmlIndex.js";


// TOP GAMES CONTAINERS
export const topGamesList = [];
export async function fetchTopSellers(){

    try{
        for(let i = 0; i <= 6; i++){
        // // Randomizes a number between 4180 and 4200 (gameID)
        const topGamesIds = Array.from({length: 1}, () => Math.floor(Math.random() * 21) + 4180);
        const urlTopGames = `https://api.rawg.io/api/games/${topGamesIds}?key=2657f7a3a75c46e79175cef89041b30b`;
        const responseTopGames = await fetch(urlTopGames);
        const details = await responseTopGames.json();

const topGamesDetails = {
        name: details.name ?? "No name available",
        id: details.id,
        mainImg: details.background_image ?? "No image available",
    } 
    topGamesList.push(topGamesDetails);
}
// generate usedGamesContainers on page load
generateTopSellersContainer(topGamesList);
}
catch(error) {
    console.log(error);
}};


// USED GAMES CONTAINERS
export const usedGamesList = [];
export async function fetchUsedGames(){

    try{
        for(let i = 0; i <= 6; i++){
                    // // Randomizes a number between 3000 and 3020 (gameID)
        const usedGamesIds = Array.from({length: 1}, () => Math.floor(Math.random() * 21) + 3000);
        const urlUsedGames = `https://api.rawg.io/api/games/${usedGamesIds}?key=2657f7a3a75c46e79175cef89041b30b`;
        const responseUsedGames = await fetch(urlUsedGames);
        const details = await responseUsedGames.json();

const usedGamesDetails = {
        name: details.name ?? "No name available",
        id: details.id,
        mainImg: details.background_image ?? "No image available",
    } 
    usedGamesList.push(usedGamesDetails);
}
// generate topgamesContainers on page load
generateUsedGamesContainer(usedGamesList);
}
catch(error) {
    console.log(error);
}};
