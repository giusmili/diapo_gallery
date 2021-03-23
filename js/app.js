document.addEventListener("DOMContentLoaded", () => {
   console.log(200);
   let btn, container, box, secondBox, lastBox;
   btn = document.querySelector("button");
   container = document.querySelector(".container");
   box = document.getElementsByClassName("box-1")[0];
   secondBox = document.getElementsByClassName("box-2")[0];
   lastBox = document.getElementsByClassName("box-3")[0];

   /* event button */
   btn.addEventListener('click', () => {
      container.classList.toggle("appear");
      box.classList.toggle('speed-box');
      lastBox.classList.toggle('speed-box');
   });
});