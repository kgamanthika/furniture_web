// ========================================
// SHOP PRODUCT DISPLAY
// ========================================

const productGrid =
    document.getElementById("productGrid");


if (productGrid) {

    products.forEach((product) => {

        const productCard =
            document.createElement("div");

        productCard.className =
            "shop-product-card";


        productCard.innerHTML = `

            <div class="shop-product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <h3>
                ${product.name}
            </h3>


            <p class="price">
                $${product.price.toFixed(2)}
            </p>


            <button
                class="add-cart-btn"
                data-id="${product.id}"
                title="Add to cart"
            >
                +
            </button>

        `;


        productGrid.appendChild(productCard);

    });

}



// ========================================
// ADD TO CART
// ========================================

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList
                .contains("add-cart-btn")
        ) {

            const productId =
                Number(
                    event.target.dataset.id
                );


            addToCart(productId);

        }

    }
);



// ========================================
// ADD PRODUCT
// ========================================

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {
        return;
    }


    let cart =
        JSON.parse(
            localStorage.getItem("furniCart")
        ) || [];


    const existingProduct =
        cart.find(
            item => item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    localStorage.setItem(
        "furniCart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        `${product.name} added to cart!`
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


    const cart =
        JSON.parse(
            localStorage.getItem("furniCart")
        ) || [];


    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;

}


updateCartCount();