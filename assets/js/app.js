var toggleBtn = document.querySelector('.toggle-btn');
var closeBtn = document.querySelector('.close-btn');
var navLinks = document.querySelector('.navlinks');
var body = document.body;

toggleBtn.addEventListener('click', () => {
    navLinks.classList.add('translateZero')
    body.classList.add('overflowHidden')
})

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('translateZero')
    body.classList.remove('overflowHidden')
})