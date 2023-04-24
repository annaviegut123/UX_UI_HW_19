// javascript for preloader animation

var firstTime = 1;

function fade() {
    $('.preloader').fadeOut("slow");
    firstTime = 0;
    return firstTime;
}

if (firstTime === 1) {
    console.log("Hello");
    setTimeout(fade, 3000);
} else {
    document.getElementById('.preloader').style.visibility = 'hidden';
    console.log("Hi");
}
