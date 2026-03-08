
// LOADING

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},600);

},1800);

});


// MENU

function toggleMenu(){

document.getElementById("menu").classList.toggle("active");

}


// DARK MODE

function toggleMode(){

document.body.classList.toggle("light");

}
