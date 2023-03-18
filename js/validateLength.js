
export function validatePropertyLengthIndex(details, gameDetails){

// check if genres are available
if(details.genres && details.genres.length > 0){
    gameDetails.genre.genre1 = details.genres[0].name;
}
if(details.genres && details.genres.length > 1){
    gameDetails.genre.genre2 = details.genres[1].name;
}
if(details.genres && details.genres.length > 2){
    gameDetails.genre.genre3 = details.genres[2].name;
}
if(details.genres && details.genres.length > 3){
    gameDetails.genre.genre4 = details.genres[3].name;
}

// check if platforms are available
if(details.platforms && details.platforms.length > 0){
    gameDetails.platforms.platform1 = details.platforms[0].platform.name;
}
if(details.platforms && details.platforms.length > 1){
    gameDetails.platforms.platform2 = details.platforms[1].platform.name;
}
if(details.platforms && details.platforms.length > 2){
    gameDetails.platforms.platform3 = details.platforms[2].platform.name;
}
if(details.platforms && details.platforms.length > 3){
    gameDetails.platforms.platform4 = details.platforms[3].platform.name;
}
if(details.platforms && details.platforms.length > 4){
    gameDetails.platforms.platform5 = details.platforms[4].platform.name;
}
if(details.platforms && details.platforms.length > 5){
    gameDetails.platforms.platform6 = details.platforms[5].platform.name;
}
}


export function validatePropertyLengthDetails(details, gameDetails){

// check if genres are available
if(details.genres && details.genres.length > 0){
    gameDetails.genre.genre1 = details.genres[0].name;
}
if(details.genres && details.genres.length > 1){
    gameDetails.genre.genre2 = details.genres[1].name;
}
if(details.genres && details.genres.length > 2){
    gameDetails.genre.genre3 = details.genres[2].name;
}
if(details.genres && details.genres.length > 3){
    gameDetails.genre.genre4 = details.genres[3].name;
}

// check if publishers are available
if(details.publishers && details.publishers.length > 0){
    gameDetails.publisher.publisher1 = details.publishers[0].name;
}
if(details.publishers && details.publishers.length > 1){
    gameDetails.publisher.publisher2 = details.publishers[1].name;
}
if(details.publishers && details.publishers.length > 2){
    gameDetails.publisher.publisher3 = details.publishers[2].name;
}

// check if platforms are available
if(details.platforms && details.platforms.length > 0){
    gameDetails.platforms.platform1 = details.platforms[0].platform.name;
}
if(details.platforms && details.platforms.length > 1){
    gameDetails.platforms.platform2 = details.platforms[1].platform.name;
}
if(details.platforms && details.platforms.length > 2){
    gameDetails.platforms.platform3 = details.platforms[2].platform.name;
}
if(details.platforms && details.platforms.length > 3){
    gameDetails.platforms.platform4 = details.platforms[3].platform.name;
}
if(details.platforms && details.platforms.length > 4){
    gameDetails.platforms.platform5 = details.platforms[4].platform.name;
}
if(details.platforms && details.platforms.length > 5){
    gameDetails.platforms.platform6 = details.platforms[5].platform.name;
}
}