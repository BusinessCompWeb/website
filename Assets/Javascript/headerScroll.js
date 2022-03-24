/*
Javascript to add 'sticky' class to header when user scrolls down.
Useful for styling the header differently when the user scrolls
down and when the user is at the top of the webpage.
*/

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});