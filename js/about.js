// ========================================
// TESTIMONIAL DATA
// ========================================

const testimonials = [

    {
        name: "Maria Jones",

        role: "CEO, Co-Founder, XYZ Inc.",

        image:
            "https://randomuser.me/api/portraits/women/44.jpg",

        text:
            "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis dui dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
    },

    {
        name: "John Smith",

        role: "Founder, ABC Furniture",

        image:
            "https://randomuser.me/api/portraits/men/32.jpg",

        text:
            "Aliquam vulputate velit imperdiet dolor tempor tristique. Donec vitae odio quis dui dapibus malesuada. Nullam ac aliquet velit."
    },

    {
        name: "Sarah Wilson",

        role: "Interior Designer",

        image:
            "https://randomuser.me/api/portraits/women/65.jpg",

        text:
            "Donec facilisis quam ut purus rutrum lobortis. Aliquam vulputate velit imperdiet dolor tempor tristique."
    }

];


// ========================================
// CURRENT TESTIMONIAL
// ========================================

let currentTestimonial = 0;



// ========================================
// ELEMENTS
// ========================================

const testimonialText =
    document.getElementById(
        "testimonialText"
    );

const testimonialImage =
    document.getElementById(
        "testimonialImage"
    );

const testimonialName =
    document.getElementById(
        "testimonialName"
    );

const testimonialRole =
    document.getElementById(
        "testimonialRole"
    );

const testimonialDots =
    document.querySelectorAll(
        "#testimonialDots span"
    );



// ========================================
// DISPLAY TESTIMONIAL
// ========================================

function showTestimonial(index) {

    const testimonial =
        testimonials[index];


    testimonialText.textContent =
        `"${testimonial.text}"`;


    testimonialImage.src =
        testimonial.image;


    testimonialName.textContent =
        testimonial.name;


    testimonialRole.textContent =
        testimonial.role;


    testimonialDots.forEach(
        (dot, dotIndex) => {

            dot.classList.toggle(
                "active",
                dotIndex === index
            );

        }
    );

}



// ========================================
// NEXT
// ========================================

const nextButton =
    document.getElementById(
        "nextTestimonial"
    );


if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            currentTestimonial++;

            if (
                currentTestimonial >=
                testimonials.length
            ) {

                currentTestimonial = 0;

            }

            showTestimonial(
                currentTestimonial
            );

        }
    );

}



// ========================================
// PREVIOUS
// ========================================

const previousButton =
    document.getElementById(
        "previousTestimonial"
    );


if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            currentTestimonial--;

            if (
                currentTestimonial < 0
            ) {

                currentTestimonial =
                    testimonials.length - 1;

            }

            showTestimonial(
                currentTestimonial
            );

        }
    );

}



// ========================================
// CART COUNT
// ========================================

function updateAboutCartCount() {

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


updateAboutCartCount();