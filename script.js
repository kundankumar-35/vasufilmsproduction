


// Select the slider element
const slider = document.querySelector('.slider');

// Duplicate the slider content to create a continuous sliding effect
slider.innerHTML += slider.innerHTML;


document.getElementById('exploreButton').addEventListener('click', function() {
    // window.location.href = 'movies.html'; // Ensure this path is correct
});

document.getElementById('webseries-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior (if it's a link)
    
    // Scroll to the 'webseries' section smoothly
    document.getElementById('webseries-section').scrollIntoView({
        behavior: 'smooth'
    });
});
