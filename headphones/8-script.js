 const toggleButton = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        // Toggle button symbol between hamburger and close sign
        if (navLinks.classList.contains('show')) {
            toggleButton.innerHTML = '&times;'; // × close sign
        } else {
            toggleButton.innerHTML = '&#9776;'; // ☰ hamburger menu
        }
    });