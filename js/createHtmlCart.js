const productContainer = document.querySelector(".productsContainer_cart");
const purchaseContainer = document.querySelector(".purchaseContainer_cart");
const infoContainer = document.querySelector(".infoContainer_cart");
const emptyCart = document.querySelector(".emptyContainer_cart");

const product = JSON.parse(localStorage.getItem("cartProduct"));

function productCartContainer(){

    if(product){
    const productHtml = `
                        <section class="product_cart">
                            <div class="productImg_cart" style="background-image: url('${product.image}')"></div>
                            <div class="productInfo_cart">
                                <div class="productTitle_cart">${product.name}</div>
                            </div>
                            <div class="priceInfo_cart">
                                <div class="productPrice_cart">300.00 NOK</div>
                                <div class="productRemove_cart">Remove</div>
                            </div>
                        </section>
                    `;
productContainer.insertAdjacentHTML("beforeend", productHtml);

emptyCart.innerHTML = `
<div class="empty_cart" style="display: none"></div>
`;

const removeBtn = productContainer.querySelector(".productRemove_cart");
removeBtn.addEventListener("click", () => {
localStorage.removeItem("cartProduct");
location.reload();
});
}
};


function purchaseCartContainer(){
    const purchaseHtml = `
                        <div class="totalPrice_cart">Total price:</div>
                        <div class="totalPrice-sum_cart">300.00 NOK</div>
                        <button class="buyNow-btn_cart">Buy now</button>
                        `;
        purchaseContainer.innerHTML = purchaseHtml;                       
};


function infoCartContainer(){
    const infoHtml = `
                    <div class="tax-Para_cart">All prices includes tax</div>
                    <div class="emptyCart_cart">Empty cart</div>
                    <div>
                    <a href="index.html"><button class="backToStore-btn_cart">Continue shopping</button></a>
                    </div>
                    `;
    infoContainer.innerHTML = infoHtml;                           
};


productCartContainer();
purchaseCartContainer();
infoCartContainer();

