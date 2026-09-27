// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            clearErrors();


            const firstName =
                document
                    .getElementById("firstName")
                    .value
                    .trim();


            const lastName =
                document
                    .getElementById("lastName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const subject =
                document
                    .getElementById("subject")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            let valid = true;



            // First name

            if (firstName === "") {

                showError(
                    "firstName",
                    "Please enter your first name."
                );

                valid = false;

            }



            // Last name

            if (lastName === "") {

                showError(
                    "lastName",
                    "Please enter your last name."
                );

                valid = false;

            }



            // Email

            if (email === "") {

                showError(
                    "email",
                    "Please enter your email."
                );

                valid = false;

            }
            else if (!isValidEmail(email)) {

                showError(
                    "email",
                    "Please enter a valid email."
                );

                valid = false;

            }



            // Subject

            if (subject === "") {

                showError(
                    "subject",
                    "Please enter a subject."
                );

                valid = false;

            }



            // Message

            if (message === "") {

                showError(
                    "message",
                    "Please enter your message."
                );

                valid = false;

            }
            else if (message.length < 10) {

                showError(
                    "message",
                    "Message must contain at least 10 characters."
                );

                valid = false;

            }



            // Success

            if (valid) {

                const success =
                    document.getElementById(
                        "formSuccess"
                    );


                success.classList.add("show");


                contactForm.reset();


                setTimeout(() => {

                    success.classList.remove(
                        "show"
                    );

                }, 5000);

            }

        }
    );

}



// ========================================
// SHOW ERROR
// ========================================

function showError(
    fieldId,
    message
) {

    const field =
        document.getElementById(fieldId);


    const error =
        document.getElementById(
            `${fieldId}Error`
        );


    const group =
        field.closest(".form-group");


    group.classList.add("error");


    error.textContent =
        message;

}



// ========================================
// CLEAR ERRORS
// ========================================

function clearErrors() {

    const groups =
        document.querySelectorAll(
            ".form-group"
        );


    groups.forEach(group => {

        group.classList.remove("error");

    });


    const errors =
        document.querySelectorAll(
            ".error-message"
        );


    errors.forEach(error => {

        error.textContent = "";

    });

}



// ========================================
// EMAIL VALIDATION
// ========================================

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}



// ========================================
// CART COUNT
// ========================================

function updateContactCartCount() {

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


updateContactCartCount();