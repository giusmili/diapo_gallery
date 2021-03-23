# Cours Diapo and Gallery
## Comment faire une galerie et un diaporama
Ce dépôt sert à apprendre à gérér les propriétés css et le langage js

Exemple de code css :

```css
    /* reset css - 2021 */
html{
    font-size: 62.5%;
    /* option arrière-plan */
   background: #000 url(../asset/montage.jpg)no-repeat fixed center center / cover;
}
body{
    font: 1.6rem 'Josefin Sans',sans-serif;
    margin: 0;
}
h1,h2,h3,p,figure,ul,ol,hr{
    margin: 0;
    padding: 0;
    
}
h1,h2,h3{
    font-weight: 100;
}
button{
    padding: 0;
    border: 0;
}
*{
    box-sizing: border-box;
}
```
### Exemple de code js
 ```js
    document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let slide;
    slide = document.querySelector(".slide_show");

    slide.addEventListener("click", e => {
        console.log(e.target);
        slide.classList.toggle("slide_stop");
    });
});
 ```