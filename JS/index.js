// javascript for preloader animation

let firstTime = 1;

function fade() {
    $('.preloader').fadeOut("slow");
    firstTime = 0;
}

if (firstTime === 1) {
    console.log("Hello");
    setTimeout(fade, 3000);
} else {
    document.getElementById('.preloader').style.visibility = 'hidden';
    console.log("Hi");
}
