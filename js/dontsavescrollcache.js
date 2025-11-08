function NoScrollCache() {
    // Scroll to top on page load and refresh
window.addEventListener('load', function() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.scrollTop = 0;
        });
    });
    // Also scroll to top when page is shown (including when coming from back/forward cache)
window.addEventListener('pageshow', function() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.scrollTop = 0;
        });
    });
};
NoScrollCache();
