// LOADING SCREEN
window.addEventListener("load",function(){

setTimeout(()=>{
document.getElementById("loader").style.opacity="0";

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},500);

},2000);

});

// MENU
function toggleMenu(){

document.getElementById("menu").classList.toggle("active");

}

// DARK / LIGHT MODE
function toggleMode(){

document.body.classList.toggle("light");

}
