var header = document.querySelector('header');
var headerInfo = document.querySelector('.header-info');
function toggleHeaderInfo() {
    headerInfo.classList.toggle('show-info');
}
header.addEventListener('click', toggleHeaderInfo)

