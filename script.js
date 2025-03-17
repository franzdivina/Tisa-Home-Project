let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove "active" class from dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Increment slideIndex
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show the current slide and set the active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Change slide every 10 seconds (10000 milliseconds)
    setTimeout(showSlides, 10000);
}

// Function to change slides manually
function changeSlide(n) {
    slideIndex += n - 1; // Adjust index
    showSlides();
}

// Function to navigate to a specific slide
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Start slideshow on page load
showSlides();

document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name && message) {
        // Create a new testimonial div
        let testimonial = document.createElement("div");
        testimonial.classList.add("testimonial");
        testimonial.innerHTML = `<h3>${name}</h3><p>"${message}"</p>`;

        // Add the new testimonial to the page
        document.getElementById("reviews-container").appendChild(testimonial);

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    }
});
