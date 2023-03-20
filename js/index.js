import { containerHtmlIndex } from "./createHtmlIndex.js";
import { validatePropertyLengthIndex } from "./validateLength.js";
import { fetchTopSellers, fetchUsedGames} from "./apiLoops.js";

const baseUrl = "https://api.rawg.io/api/games/4200";
const apiKey ="?key=4efa6663671c47a38765f4de9cc9868c";
const newUrl = baseUrl + apiKey;
const proxy = "https://noroffcors.onrender.com/";
const corsEnabledUrl = proxy + newUrl;


async function fetchGames(){
    try{
        const response = await fetch(corsEnabledUrl);
        const details = await response.json();

 // Get the first set number of sentences from the description
 const sentences = details.description?.split(/[.!?]/) ?? [];
 const setNumSentences = 2; // Set the number of sentences you want to filter out
 const firstSetNumSentences = sentences.slice(0, setNumSentences);
 const filteredDescription = firstSetNumSentences.join('. ');

const gameDetails = {
        name: details.name ?? "No name available",
        id: details.id,
        mainImg: details.background_image ?? "No image available",
        genre: {genre1: "Unknown"},
        developer: details.developers?.[0]?.name ?? "Unknown",
        platforms: {platform1: "Unknown"},
        description: filteredDescription ?? "No description available",
    } 

validatePropertyLengthIndex(details, gameDetails);
containerHtmlIndex(gameDetails);
    
}
catch(error) {
    console.log(error);
}

}
// Calling the function in this js.file for generating top container on index.html
fetchGames();

//Calling the functions from apiLoops.js for generating game-containers on index.html
fetchTopSellers();
fetchUsedGames();