// let contentForms = document.querySelectorAll('.form-content');
const troubleFindingProduct = document.querySelector('.trouble-finding-product');
const contactUsClick = document.getElementById('contact-us');

contactUsClick.addEventListener("click", displayContentForms());

function displayContentForms() {
    document.querySelectorAll('.form-content').style.display = "block";
}