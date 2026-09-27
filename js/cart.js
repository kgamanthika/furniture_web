// ========================================
// GET CART
// ========================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("furniCart")
    ) || [];

}



// ========================================
// SAVE CART
// ========================================

function saveCart(cart) {

    localStorage.setItem(
        "furniCart",
        JSON.stringify(cart)
    );

}



// ========================================
// DISPLAY CART
// ========================================

function renderCart() {

    const cartContent =
        document.getElementById(
            "cartContent"
        );


    if (!cartContent) {
        return;
    }


    const cart = getCart();


    if (cart.length === 0) {

        cartContent.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Looks like you haven't added
                    anything to your cart yet.
                </p>

                <a
                    href="shop.html"
                    class="btn btn-dark"
                >
                    Continue Shopping
                </a>

            </div>

        `;

        updateCartCount();

        return;
    }



    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            item.price *
            item.quantity;

    });



    cartContent.innerHTML = `

        <div class="cart-table-wrapper">

            <table class="cart-table">

                <thead>

                    <tr>

                        <th>
                            Image
                        </th>

                        <th>
                            Product
                        </th>

                        <th>
                            Price
                        </th>

                        <th>
                            Quantity
                        </th>

                        <th>
                            Total
                        </th>

                        <th>
                            Remove
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${cart.map(item => `

                        <tr>

                            <td>

                                <div class="cart-product">

                                    <img
                                        src="${item.image}"
                                        alt="${item.name}"
                                    >

                                </div>

                            </td>


                            <td>

                                <span class="cart-product-name">

                                    ${item.name}

                                </span>

                            </td>


                            <td>

                                $${item.price.toFixed(2)}

                            </td>


                            <td>

                                <div
                                    class="quantity-control"
                                >

                                    <button
                                        class="quantity-btn"
                                        onclick="changeQuantity(
                                            ${item.id},
                                            -1
                                        )"
                                    >
                                        −
                                    </button>


                                    <span
                                        class="quantity-value"
                                    >
                                        ${item.quantity}
                                    </span>


                                    <button
                                        class="quantity-btn"
                                        onclick="changeQuantity(
                                            ${item.id},
                                            1
                                        )"
                                    >
                                        +
                                    </button>

                                </div>

                            </td>


                            <td>

                                $${(
                                    item.price *
                                    item.quantity
                                ).toFixed(2)}

                            </td>


                            <td>

                                <button
                                    class="remove-btn"
                                    onclick="removeItem(
                                        ${item.id}
                                    )"
                                >
                                    ×
                                </button>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>



        <div class="cart-actions">


            <div class="cart-left">


                <div class="cart-buttons">

                    <button
                        class="cart-btn"
                        onclick="updateCart()"
                    >
                        Update Cart
                    </button>


                    <a
                        href="shop.html"
                        class="cart-btn"
                    >
                        Continue Shopping
                    </a>

                </div>



                <div class="coupon">

                    <h3>
                        Coupon
                    </h3>

                    <p>
                        Enter your coupon code
                        if you have one.
                    </p>


                    <div class="coupon-form">

                        <input
                            type="text"
                            id="couponInput"
                            placeholder="Coupon Code"
                        >

                        <button
                            onclick="applyCoupon()"
                        >
                            Apply Coupon
                        </button>

                    </div>

                </div>

            </div>



            <div class="cart-totals">

                <h3>
                    CART TOTALS
                </h3>


                <div class="total-row">

                    <span>
                        Subtotal
                    </span>

                    <strong>
                        $${subtotal.toFixed(2)}
                    </strong>

                </div>


                <div class="total-row grand-total">

                    <span>
                        Total
                    </span>

                    <strong>
                        $${subtotal.toFixed(2)}
                    </strong>

                </div>


                <a
                    href="#"
                    class="checkout-btn"
                    onclick="checkout(event)"
                >
                    Proceed To Checkout
                </a>

            </div>

        </div>

    `;


    updateCartCount();

}



// ========================================
// CHANGE QUANTITY
// ========================================

function changeQuantity(
    productId,
    change
) {

    const cart = getCart();


    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        const index =
            cart.findIndex(
                product =>
                    product.id === productId
            );

        cart.splice(index, 1);

    }


    saveCart(cart);

    renderCart();

}



// ========================================
// REMOVE ITEM
// ========================================

function removeItem(productId) {

    let cart = getCart();


    cart = cart.filter(
        item =>
            item.id !== productId
    );


    saveCart(cart);

    renderCart();

}



// ========================================
// UPDATE CART
// ========================================

function updateCart() {

    renderCart();

    alert("Cart updated.");

}



// ========================================
// COUPON
// ========================================

function applyCoupon() {

    const couponInput =
        document.getElementById(
            "couponInput"
        );


    if (!couponInput) {
        return;
    }


    const code =
        couponInput.value
            .trim()
            .toUpperCase();


    if (code === "FURNI10") {

        alert(
            "Coupon applied! 10% discount."
        );

    } else {

        alert(
            "Invalid coupon code."
        );

    }

}



// ========================================
// CHECKOUT
// ========================================

function checkout(event) {

    event.preventDefault();

    const cart = getCart();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;
    }


    alert(
        "Checkout functionality will be added later."
    );

}



// ========================================
// CART COUNT
// ========================================

function updateCartCount() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (!cartCount) {
        return;
    }


    const cart = getCart();


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent = total;

}



// ========================================
// INITIALIZE
// ========================================

renderCart();
updateCartCount();