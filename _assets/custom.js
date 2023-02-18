var header = document.querySelector('header');
var catechism = document.querySelector('.catechism').textContent;
var headerInfo = document.querySelector('.header-info');
var imageCount = document.querySelectorAll('.thumbnail-trigger').length-1 + " dogs + " + catechism;
document.querySelector('header').setAttribute('data-image-counter', imageCount);
//
function toggleHeaderInfo() {
    headerInfo.classList.toggle('show-info');
}
header.addEventListener('click', toggleHeaderInfo)

