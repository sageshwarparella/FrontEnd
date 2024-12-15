
console.log("JavaScript is linked and running!");
    // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Action for "See More" Links
    const seeMoreLinks = document.querySelectorAll('.shop .box-content a');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const gadgetType = e.target.closest('.box-content').querySelector('h2').innerText;
            alert(`More details about ${gadgetType} will be available soon!`);
        });
    });

    // Action for "Explore Rentals" Button
    const exploreButton = document.querySelector('.explore button');
    exploreButton.addEventListener('click', () => {
        // Example: Smoothly scroll to the "Trending Gadgets to Rent" section
        document.querySelector('.data').scrollIntoView({ behavior: 'smooth' });
    });

    // Contact Form Submission
    document.addEventListener("DOMContentLoaded", () => {
        console.log("JavaScript is linked and running!");
    
        const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the page from reloading
    
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
    
            if (name && email && message) {
                alert("Form submitted successfully!");
                console.log("Form Data:", { name, email, message });
            } else {
                alert("Please fill in all the fields.");
            }
        });
    });

});
  