import { detailsCreateHtml } from "./createHtmlDetails.js";
import { validatePropertyLengthDetails } from "./validateLength.js";


// This API-call is for showing info on the Pokemon being selected on index.html, and opens up that Pokemon on details.html.
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "https://api.rawg.io/api/games/" + id + "?key=2657f7a3a75c46e79175cef89041b30b";

async function fetchSelectedGame(){

    try{
    const response = await fetch(url);
    const details = await response.json();

    const gameDetails = {
        name: details.name ?? "No name available",
        id: details.id,
        mainImg: details.background_image ?? "No image available",
        genre: {genre1: "Unknown"},
        gameDescription: details.description ?? "No description available", 
        developer: details.developers?.[0]?.name ?? "Unknown",
        publisher: {publisher1: "Unknown"},
        releaseDate: details.released ?? "Unknown release date",
        esrbRating: details.esrb_rating?.name ?? "unknown ESRB-rating",
        metacritic: details.metacritic ?? "Unknown or none",
        platforms: {platform1: "Unknown"}
    };

validatePropertyLengthDetails(details, gameDetails);

detailsCreateHtml(gameDetails);

}
catch(error) {
    console.log(error);
}
}

fetchSelectedGame();






