var Cevre = document.getElementsByClassName("daire");

// Cevre[0].onmouseover = function() {
//     this.style.background = "rgb(79, 79, 219)";
//     Cevre[2].style.background = "white"
//     console.log(Cevre[2]);
// }
// Cevre.onmouseover = function() {

// }

Cevre[0].addEventListener ("mouseover", function(){
    this.classList.add("bacgroundcolor");
    Cevre[2].style.background = "white";
})
Cevre[1].addEventListener ("mouseover", function(){
    this.classList.add("bacgroundcolor");
    Cevre[2].style.background = "white";
})
Cevre[3].addEventListener ("mouseover", function(){
    this.classList.add("bacgroundcolor");
    Cevre[2].style.background = "white";
})
Cevre[4].addEventListener ("mouseover", function(){
    this.classList.add("bacgroundcolor");
    Cevre[2].style.background = "white";
})
Cevre[0].addEventListener ("mouseleave", function(){
    this.classList.remove("bacgroundcolor");
    Cevre[2].style.background = "rgb(79, 79, 219)";
})
Cevre[1].addEventListener ("mouseleave", function(){
    this.classList.remove("bacgroundcolor");
    Cevre[2].style.background = "rgb(79, 79, 219)";
})
Cevre[3].addEventListener ("mouseleave", function(){
    this.classList.remove("bacgroundcolor");
    Cevre[2].style.background = "rgb(79, 79, 219)";
})
Cevre[4].addEventListener ("mouseleave", function(){
    this.classList.remove("bacgroundcolor");
    Cevre[2].style.background = "rgb(79, 79, 219)";
})