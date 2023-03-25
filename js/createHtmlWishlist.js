const productContainer = document.querySelector(".productsContainer_wishlist");
const mainContainer = document.querySelector(".container_wishlist");
const infoContainer = document.querySelector(".infoContainer_wishlist");
const emptyWishlist = document.querySelector(".emptyContainer_wishlist");

const product = JSON.parse(localStorage.getItem("wishlistProduct"));

function productwishlistContainer(){
    
    if(product){
    const productHtml = `
                        <section class="product_wishlist">
                            <div class="productImg_wishlist" style="background-image: url('${product.image}')"></div>
                            <div class="productInfo_wishlist">
                                <div class="productTitle_wishlist">${product.name}</div>
                            </div>
                            <div class="priceInfo_wishlist">
                                <div class="productPrice_wishlist">300.00 NOK</div>
                                <div class="productRemove_wishlist">Remove</div>
                            </div>
                        </section>
                    `;
productContainer.insertAdjacentHTML("beforeend", productHtml);

emptyWishlist.innerHTML = `
<div class="empty_wishlist" style="display: none"></div>
`;

infowishlistContainer(true);

const removeBtn = productContainer.querySelector(".productRemove_wishlist");
removeBtn.addEventListener("click", () => {
  localStorage.removeItem("wishlistProduct");
  location.reload();
});

function infowishlistContainer() {
  const infoHtml = `
    <div class="emptyCart_wishlist">Empty wishlist</div>
  `;
  infoContainer.innerHTML = infoHtml;
};
infowishlistContainer();
}
};

productwishlistContainer();



