const detailsContainer = document.querySelector(".productDetailsContainer");


/* Creating HTML for productDetails.html */
export function detailsCreateHtml(gameDetails) {
    const detailsHtml = `
                        <section class="detailsSection1">
                                <h1 class="detailsGameTitle">${gameDetails.name}</h1> 
                                <div class="details-mainImage" style="background-image: url('${gameDetails.mainImg}')"></div>

                            <section class="detailsGenreContainer">
                                    <div class="detailsGenres">Genres:</div>
                                    ${[gameDetails.genre.genre1, 
                                        gameDetails.genre.genre2, 
                                        gameDetails.genre.genre3, 
                                        gameDetails.genre.genre4].filter(Boolean).map((genre) => `
                                    <div class="detailsGenre">${genre}</div>`).join(' |')}
                            </section>
                                <h2 class="detailsPragraphHeader">Description</h2>
                                <p class="detailsParagraph">${gameDetails.gameDescription}</p>
                                </section>

                            <section class="detailsSection2">
                                <h2 class="detailsPrice">Price NOK</h2>
                                <button class="detailsBuyNow-btn">BUY NOW</button>
                                <button class="detailsCart-btn">ADD TO CART</button>
                                <button class="detailsWishlist-btn">ADD TO WISHLIST</button>

                                <section class="detailsGameInfo">
                                    <ul>
                                        <li>Developer: ${gameDetails.developer}</li>
                                        <li>Publiser: 
                                        ${[gameDetails.publisher.publisher1, 
                                            gameDetails.publisher.publisher2, 
                                            gameDetails.publisher.publisher3].filter(Boolean).join(', ')}</li>
                                        <li>Release date: ${gameDetails.releaseDate}</li>

                                        <li>ESRB: ${gameDetails.esrbRating}</li>
                                        <li>Metacritic score: ${gameDetails.metacritic}</li>
                                        <li>Platforms:
                                            <ul class="detailsPlatforms">
                                            ${[gameDetails.platforms.platform1, 
                                                gameDetails.platforms.platform2, 
                                                gameDetails.platforms.platform3, 
                                                gameDetails.platforms.platform4, 
                                                gameDetails.platforms.platform5, 
                                                gameDetails.platforms.platform6].filter(Boolean).map((platform) => `
                                            <li>${platform}</li>`).join('')}
                                            </ul>
                                        </li>
                                    </ul>
                                </section>
                            </section>
                        </section>`;
detailsContainer.innerHTML += detailsHtml;
};

