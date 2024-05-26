document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection = section;
        }
    });

    const header = document.getElementById('dog-name-header');
    if (currentSection) {
        header.textContent = currentSection.querySelector('h2').textContent;
        header.style.display = 'block';
    } else {
        header.style.display = 'none';
    }
});
