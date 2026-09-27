
// ========================================
// MOBILE NAVIGATION
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


// ========================================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// ========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ========================================
// NEWSLETTER
// ========================================

const newsletterButton =
    document.querySelector(".newsletter-form button");

if (newsletterButton) {

    newsletterButton.addEventListener("click", () => {

        const inputs =
            document.querySelectorAll(".newsletter-form input");

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();

        if (name === "" || email === "") {

            alert("Please enter your name and email.");

            return;
        }

        alert("Thank you for subscribing!");

        inputs[0].value = "";
        inputs[1].value = "";

    });

}
