window.onload = function (){
    let contentForms = document.querySelectorAll(".form-content");
    const troubleFindingProduct = document.querySelector('.trouble-finding-product');
    let contactUsClick = document.getElementById("contact-us");

    contactUsClick.addEventListener("click", displayContentForms);

    function displayContentForms() {
        document.querySelector(".form-content").style.display = "block";
        console.log("i got clicked");
    }
};
