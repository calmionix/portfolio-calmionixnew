
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

let selectedPackage = "";
let selectedType = "";

function openPopup(type){

selectedType = type;

document.getElementById("popupTitle").innerText =
"Pesan " + type;

document.getElementById("ratePopup").style.display="flex";

}

function selectOption(el){

document.querySelectorAll(".popup-option")
.forEach(o=>o.style.background="#132c47");

el.style.background="#5b5ce2";

selectedPackage = el.innerText;

}

function orderWA(){

if(!selectedPackage){
alert("Pilih paket dulu!");
return;
}

const message =
"Halo Calmionix, saya ingin pesan " +
selectedType +
" - " +
selectedPackage;

window.open(
"https://wa.me/6282130570915?text=" +
encodeURIComponent(message)
);

}
