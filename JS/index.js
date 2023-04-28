// javascript for preloader animation

let firstTime = 1;

function fade() {
    $('.preloader').fadeOut("slow");
    firstTime = 0;
}

if (firstTime === 1) {
    setTimeout(fade, 2500);
} else {
    document.getElementById('.preloader').style.visibility = 'hidden';
}
