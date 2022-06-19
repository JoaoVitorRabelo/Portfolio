//Altera o destaque no menu
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    if (screen.height >= 1553) {
        return (
            rect.top >= -1450 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 50 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } else if (screen.height >= 993) {
        return (
            rect.top >= -997 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 50 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } else {
        return (
            rect.top >= -568 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 50 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}
const menu = document.querySelectorAll("#menuUl li");
const home = document.querySelector('#home');
const emails = document.querySelector('#emails');
const conhec = document.querySelector('#conhec');
document.addEventListener('scroll', function () {
    if (isInViewport(home)) {
        menu[0].className = "current";
        menu[1].className = "";
        menu[2].className = "";
        menu[3].className = "";
    } else if (isInViewport(conhec)) {
        menu[0].className = "";
        menu[1].className = "";
        menu[2].className = "current";
        menu[3].className = "";
    } else if (isInViewport(emails)) {
        menu[0].className = "";
        menu[1].className = "";
        menu[2].className = "";
        menu[3].className = "current";
    } else {
        menu[0].className = "";
        menu[1].className = "current";
        menu[2].className = "";
        menu[3].className = "";
    }

}, {
    passive: true
});