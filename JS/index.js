// javascript for preloader animation

function fade() {
    $('.preloader').fadeOut("slow");
}

firstTime = true;

if (firstTime === true) {
    console.log("Hello");
    setTimeout(fade, 3000);
    firstTime = false;
} else {
    document.getElementById('.preloader').style.visibility = 'hidden';
    console.log("Hi");
}
