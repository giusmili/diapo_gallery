document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let el = document.querySelector(".smile");

    document.addEventListener("click", e => {
        console.log(e.clientX);
        el.style.transform = 'translateY(' + (e.clientY - 25) + 'px)translateX(' + (e.clientX - 25) + 'px)';
    }, false);
});