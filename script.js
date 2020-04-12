window.onload = function (){
    
    // Contact Form Variables
    let contactButton = document.getElementById('contact-button');
    let contactFormContent = document.querySelector(".contact-form-content");
    let contactReason = document.getElementById("contact-reason");
    let contactFeedback = document.getElementById("feedback-box");
    let contactUsClick = document.getElementById("contact-us");
    let contactUsername = document.querySelector('input[name=contact-username]');
    let contactEmail = document.querySelector('input[name=contact-email]');

    // Product Form Variables
    let productButton =document.getElementById('product-button');
    let productFormContent = document.querySelector(".product-form-content");
    let productUsername = document.querySelector("input[name=product-username]");
    let productUserEmail = document.querySelector("input[name=product-email]");
    let prodcutDescription = document.getElementById("describe-product");
    let productSuggestionClick = document.getElementById("product-suggestion");

    // Event handlers and listeners 
    contactUsClick.addEventListener("click", displayContactForm);
    productSuggestionClick.addEventListener("click", displayProductform);
    productButton.addEventListener("click", productSuggestionFormValidation);
    contactButton.addEventListener("click", contactFormValidation);
            
    // Functions 
    function displayProductform() {
        productFormContent.style.display = "block";
    }

    function productSuggestionFormValidation() {
        // emailValidater(productUserEmail.value);
        if(productUsername.value === '' || productUserEmail.value === '' || prodcutDescription.value === '') {
            alert("All fields are required");
            return false;
        } else {
            return true;
        };
    };


    // function emailValidater(userEmail) {
    //     let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    //     if(userEmail.match(mailFormat)){
    //         alert("This is a valid email address")
    //         return true;
    //     } else {
    //         alert("This is an invalid email address")
    //         return false;
    //     }
    // }

    function troubleFindingProductSwitch() {
        if(contactReason.selectedIndex === 2){
            displayProductform()
            productUsername.focus();
            alert("We noticed you're having trouble finding a product. Try using the Product Suggestion Form!");
        };
    };

    function displayContactForm() {
        contactFormContent.style.display = "block";
    }

    function contactFormValidation() {
        troubleFindingProductSwitch()
        if(contactUsername.value === '' || contactEmail.value === '' || contactReason.value === '' || contactFeedback.value === '') {
            alert("All fields are required");
            return false;
        } else {
            return true;
        }
    }
};
