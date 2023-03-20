import { detailsCreateHtml } from "./createHtmlDetails.js";
import { validatePropertyLengthDetails } from "./validateLength.js";


// This API-call is for showing info on the Pokemon being selected on index.html, and opens up that Pokemon on details.html.
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const baseUrl = "https://api.rawg.io/api/games/";
const apiKey ="?key=4efa6663671c47a38765f4de9cc9868c";
const newUrl = baseUrl + id + apiKey;
const proxy = "https://noroffcors.onrender.com/";
const corsEnabledUrl = proxy + newUrl;

async function fetchSelectedGame(){

    try{
    const response = await fetch(corsEnabledUrl);
    const details = await response.json();
    console.log(corsEnabledUrl);

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






