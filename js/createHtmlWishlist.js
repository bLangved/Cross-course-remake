const productContainer = document.querySelector(".productsContainer_wishlist");
const purchaseContainer = document.querySelector(".purchaseContainer_wishlist");
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

const removeBtn = productContainer.querySelector(".productRemove_wishlist");
removeBtn.addEventListener("click", () => {
localStorage.removeItem("wishlistProduct");
location.reload();
});
}
};


function purchasewishlistContainer(){
    const purchaseHtml = `
                        <div class="totalPrice_wishlist">Total price:</div>
                        <div class="totalPrice-sum_wishlist">300.00 NOK</div>
                        <button class="buyNow-btn_wishlist">Buy now</button>
                        `;
purchaseContainer.innerHTML = purchaseHtml;                       
};


function infowishlistContainer(){
    const infoHtml = `
                    <div class="tax-Para_wishlist">All prices includes tax</div>
                    <div class="emptyCart_wishlist">Empty wishlist</div>
                    <div>
                    <a href="index.html"><button class="backToStore-btn_wishlist">Continue shopping</button></a>
                    </div>
                    `;
infoContainer.innerHTML = infoHtml;                           
};


productwishlistContainer();
purchasewishlistContainer();
infowishlistContainer();