document.addEventListener("DOMContentLoaded", () => {
    console.log(200);

    let parents, el;
    parents = document.querySelector(".wrapper");
    el = document.createElement("div");
    parents.appendChild(el);
    console.log(el);
    el.setAttribute("class", "contentInfo");
    el.setAttribute("role", "region");
    el.setAttribute("aria-labelledby", "barry");
    el.innerHTML += '<p id="barry">Flash : Barry Allen </p>';
});