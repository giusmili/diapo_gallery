document.addEventListener("DOMContentLoaded", () => {
    console.log(200);

    let parents, el, texte, content, dayNight, superparent, header, loop, bool;
    texte = document.querySelector(".material-icons");
    content = document.querySelector("#content > p");
    parents = document.querySelector(".wrapper");
    el = document.createElement("div");
    dayNight = document.querySelectorAll("#header .fas")[1];
    loop = document.querySelectorAll("#header .fas")[0];
    superparent = document.querySelector("body");
    header = document.querySelector("#header h1");
    parents.appendChild(el);
    console.log(el);
    el.setAttribute("class", "contentInfo");
    el.setAttribute("role", "region");
    el.setAttribute("aria-labelledby", "barry");
    el.innerHTML += '<p id="barry">Flash : Barry Allen </p>';

    /*event*/
    texte.addEventListener("click", e => {
        console.log(e.target);
        console.log(content);
        content.classList.toggle("align-text");
        //texte.innerText = "format_align_left"
        texte.innerText == "format_align_center" ? texte.innerText = "format_align_left" : texte.innerText = "format_align_center";
    });

    //jour et nuit
    dayNight.addEventListener("click", () => {
        console.log("ok");
        superparent.classList.toggle("night_day");
        dayNight.classList.toggle("night_day_text");
        header.classList.toggle("night_day_text");
    });
    loop.addEventListener("click", e => {
        console.log(e.target);
        superparent.classList.toggle("zoom");
    });
});