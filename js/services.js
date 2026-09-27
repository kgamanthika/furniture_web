// ========================================
// DISPLAY PRODUCTS
// ========================================

const servicesProductGrid =
    document.getElementById(
        "servicesProductGrid"
    );


if (servicesProductGrid) {

    products.slice(0, 3).forEach(
        product => {

            const card =
                document.createElement("div");


            card.className =
                "services-product-card";


            card.innerHTML = `

                <div class="services-product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <h3>
                    ${product.name}
                </h3>


                <p>
                    $${product.price.toFixed(2)}
                </p>

            `;


            servicesProductGrid.appendChild(card);

        }
    );

}



// ========================================
// TESTIMONIALS
// ========================================

const serviceTestimonials = [

    {
        name: "Maria Jones",

        role: "CEO, Co-Founder, XYZ Inc.",

        image:
            "https://randomuser.me/api/portraits/women/44.jpg",

        text:
            "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis dui dapibus malesuada. Nullam ac aliquet velit."
    },


    {
        name: "John Smith",

        role: "Founder, ABC Furniture",

        image:
            "https://randomuser.me/api/portraits/men/32.jpg",

        text:
            "Aliquam vulputate velit imperdiet dolor tempor tristique. Donec vitae odio quis dui dapibus malesuada."
    },


    {
        name: "Sarah Wilson",

        role: "Interior Designer",

        image:
            "https://randomuser.me/api/portraits/women/65.jpg",

        text:
            "Donec vitae odio quis dui dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor."
    }

];


let serviceCurrent = 0;



// ========================================
// ELEMENTS
// ========================================

const serviceText =
    document.getElementById(
        "serviceTestimonialText"
    );

const serviceImage =
    document.getElementById(
        "serviceTestimonialImage"
    );

const serviceName =
    document.getElementById(
        "serviceTestimonialName"
    );

const serviceRole =
    document.getElementById(
        "serviceTestimonialRole"
    );



// ========================================
// SHOW TESTIMONIAL
// ========================================

function showServiceTestimonial(index) {

    const item =
        serviceTestimonials[index];


    serviceText.textContent =
        `"${item.text}"`;


    serviceImage.src =
        item.image;


    serviceName.textContent =
        item.name;


    serviceRole.textContent =
        item.role;

}



// ========================================
// NEXT
// ========================================

const serviceNext =
    document.getElementById(
        "serviceNext"
    );


if (serviceNext) {

    serviceNext.addEventListener(
        "click",
        () => {

            serviceCurrent++;

            if (
                serviceCurrent >=
                serviceTestimonials.length
            ) {

                serviceCurrent = 0;

            }

            showServiceTestimonial(
                serviceCurrent
            );

        }
    );

}



// ========================================
// PREVIOUS
// ========================================

const servicePrevious =
    document.getElementById(
        "servicePrevious"
    );


if (servicePrevious) {

    servicePrevious.addEventListener(
        "click",
        () => {

            serviceCurrent--;

            if (serviceCurrent < 0) {

                serviceCurrent =
                    serviceTestimonials.length - 1;

            }

            showServiceTestimonial(
                serviceCurrent
            );

        }
    );

}



// ========================================
// CART COUNT
// ========================================

function updateServicesCartCount() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (!cartCount) {
        return;
    }


    const cart =
        JSON.parse(
            localStorage.getItem(
                "furniCart"
            )
        ) || [];


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        total;

}


updateServicesCartCount();