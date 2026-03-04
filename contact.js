// Initialize EmailJS
(function () {
    emailjs.init("QCD6w4-O32GUM-d6_");  // Replace with your Public Key
})();

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_ozia222",   // Replace with Service ID
            "template_e8a1pds",  // Replace with Template ID
            form
        )
        .then(function () {
            alert("Thank you! our team will reach out you soon");
            form.reset();
        })
        .catch(function (error) {
            console.error("FAILED...", error);
            alert("Failed to send message.");
        });
    });

});