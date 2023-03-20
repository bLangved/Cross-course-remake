import { generateTopSellersContainer, generateUsedGamesContainer } from "./createHtmlIndex.js";


const baseUrl = "https://api.rawg.io/api/games/";
const apiKey ="?key=4efa6663671c47a38765f4de9cc9868c";
const proxy = "https://noroffcors.onrender.com/";



// TOP GAMES CONTAINERS
export const topGamesList = []; // This is set to export for createHtmlIndex.js (see information for function at bottom) Not in use ATM.
export async function fetchTopSellers(){

    try{
        for(let i = 0; i <= 2; i++){
            
        // // Randomizes a number (GameID)
        const topGamesIds = Array.from({length: 1}, () => Math.floor(Math.random() * 6) + 4280);
        const corsEnabledUrl = proxy + baseUrl + topGamesIds + apiKey;

        const responseTopGames = await fetch(corsEnabledUrl);
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
export const usedGamesList = []; // This is set to export for createHtmlIndex.js (see information for function at bottom) Not in use ATM.
export async function fetchUsedGames(){

    try{
        for(let i = 0; i <= 2; i++){

        // // Randomizes a number (GameID)
        const usedGamesIds = Array.from({length: 1}, () => Math.floor(Math.random() * 6) + 3211);
        const corsEnabledUrl = proxy + baseUrl + usedGamesIds + apiKey;

        const responseUsedGames = await fetch(corsEnabledUrl);
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

