document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContent = document.querySelectorAll('.tab-content div');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {

            tabButtons.forEach(btn => btn.classList.remove('active-tab'));

            button.classList.add('active-tab');

            tabContent.forEach(content => content.style.display = 'none');
            tabContent[index].style.display = 'block';
        });
    });
});
