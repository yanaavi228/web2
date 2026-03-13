document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === "" && link.getAttribute('href') === "index.html")) {
            link.classList.add('active');
        }
    });
});