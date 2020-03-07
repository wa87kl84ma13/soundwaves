// Frequent questions accordion
const question = document.querySelectorAll('.question-block');

question.forEach(function(show) {
    show.addEventListener('click', function() {
        this.getElementsByClassName('answer')[0].classList.toggle('show');
        this.getElementsByClassName('cross')[0].classList.toggle('cross-close');
    });
});

const hamburger = document.getElementById('hamburger');
const showNav = document.getElementById('navigation');
const closeNav = document.getElementById('close-nav');

hamburger.addEventListener('click', function() {
    showNav.style.display = 'block';
    showNav.classList.add('show-nav');
});

closeNav.addEventListener('click', function() {
    showNav.style.display = 'none';
});