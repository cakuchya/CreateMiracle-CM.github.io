document.addEventListener("DOMContentLoaded", function () {
    function getBasePath() {
        const list = ['about-us', 'product', 'studio', 'contact-us'];
        for (const item of list) {
            if (window.location.pathname.includes(item)) {
                return '../header-footer/';
            }
        }
        return './header-footer/';
    }

    const basePath = getBasePath();
    console.log(basePath);

    // Load header
    fetch(`${basePath}header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Dynamically load header.css
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${basePath}header.css`;
            document.head.appendChild(link);
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch(`${basePath}footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;

            // Dynamically load footer.css
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${basePath}footer.css`;
            document.head.appendChild(link);
        })
        .catch(error => console.error('Error loading footer:', error));
});
