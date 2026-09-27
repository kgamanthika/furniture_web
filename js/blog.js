// ========================================
// BLOG FILTER
// ========================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const blogCards =
    document.querySelectorAll(".blog-page-card");

const blogSearch =
    document.getElementById("blogSearch");

const noResults =
    document.getElementById("noResults");


let selectedCategory = "all";



// ========================================
// FILTER BUTTONS
// ========================================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory =
            button.dataset.category;

        filterBlogs();

    });

});



// ========================================
// SEARCH
// ========================================

if (blogSearch) {

    blogSearch.addEventListener(
        "input",
        filterBlogs
    );

}



// ========================================
// FILTER BLOGS
// ========================================

function filterBlogs() {

    const searchText =
        blogSearch.value
            .trim()
            .toLowerCase();


    let visibleCount = 0;


    blogCards.forEach(card => {

        const category =
            card.dataset.category;

        const title =
            card.dataset.title
                .toLowerCase();


        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;


        const searchMatch =
            title.includes(searchText);


        if (
            categoryMatch &&
            searchMatch
        ) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCount === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }

}



// ========================================
// CART COUNT
// ========================================

function updateBlogCartCount() {

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


    cartCount.textContent = total;

}


updateBlogCartCount();