var trigger = document.querySelector('header');
var catechism = document.querySelector('.catechism').textContent;
var info = document.querySelector('.info');
var imageCount = document.querySelectorAll('.thumbnail-trigger').length-1 + " dogs + " + catechism;
document.querySelector('header').setAttribute('data-image-counter', imageCount);
//
function toggleClass() {
    info.classList.toggle('show-info');
}
trigger.addEventListener('click', toggleClass)

