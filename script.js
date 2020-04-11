window.onload = function (){
    let contentForms = document.querySelectorAll(".form-content");
    const troubleFindingProduct = document.querySelector('.trouble-finding-product');
    let contactUsClick = document.getElementById("contact-us");
    let productSuggestionClick = document.getElementById("product-suggestion");

    contactUsClick.addEventListener("click", displayContactForm);
    productSuggestionClick.addEventListener("click", displayProductform);

    function displayProductform() {
        document.querySelector(".product-form-content").style.display = "block";
    }

    function displayContactForm() {
        document.querySelector(".contact-form-content").style.display = "block";
    }
};
