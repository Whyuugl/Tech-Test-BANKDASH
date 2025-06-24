// Import CSS files
import '../assets/css/style-v2.css';

// Main application logic
console.log('BankDash application loaded');

// Add any additional JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburgerIcon && sidebar) {
        hamburgerIcon.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Search functionality
    const searchInputs = document.querySelectorAll('.search-bar input');
    searchInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Add search logic here
            console.log('Searching for:', searchTerm);
        });
    });

    // Card toggle functionality
    const cardToggles = document.querySelectorAll('.card .toggle');
    cardToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
        });
    });
}); 