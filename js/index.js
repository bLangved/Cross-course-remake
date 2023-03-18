import { containerHtmlIndex } from "./createHtmlIndex.js";
import { validatePropertyLengthIndex } from "./validateLength.js";
import { fetchTopSellers, fetchUsedGames} from "./apiLoops.js";


async function fetchGames(){

    try{
        const url = `https://api.rawg.io/api/games/4200?key=2657f7a3a75c46e79175cef89041b30b`;
        const response = await fetch(url);
        const details = await response.json();
        // console.log(details);

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
fetchGames();

fetchTopSellers();
fetchUsedGames();



// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");