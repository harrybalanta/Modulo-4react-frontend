let divId = document.getElementById("container");
let divId2 = document.getElementById("container2");
let divId3 = document.getElementById("container3");
let boton = document.getElementById("boton");

if (boton && divId && divId2 && divId3) {
  boton.addEventListener("click", texto);
  boton.addEventListener("click", texto2);
  boton.addEventListener("click", texto3);
}

function texto() {
  divId.innerHTML = "contenido agregado primer div";
  divId.style.margin = "50px";
  divId.style.background = "#5FEFF1";
  divId.style.height = "100px";
  divId.style.display = "flex"; 
  divId.style.alignItems = "center"; 
  divId.style.justifyContent = "center"; 
  divId.style.textAlign = "center"; 
  
}

function texto2() {
  divId2.innerHTML = "contenido agregado primer div";
  divId2.style.margin = "50px";
  divId2.style.background = "#EBE222";
  divId2.style.height = "100px"; 
  divId2.style.display = "flex"; 
  divId2.style.alignItems = "center"; 
  divId2.style.justifyContent = "center"; 
  divId2.style.textAlign = "center"; 
}

function texto3() {
  divId3.innerHTML = "contenido agregado primer div";
  divId3.style.margin = "50px";
  divId3.style.background = "green";
  divId3.style.background = "#B8465E";
  divId3.style.height = "100px"; 
  divId3.style.display = "flex"; 
  divId3.style.alignItems = "center"; 
  divId3.style.justifyContent = "center"; 
  divId3.style.textAlign = "center"; 
}
boton.style.background = "#4FAF50"; 
boton.style.color = "white"; 
boton.style.textAlign = "center"; 
boton.style.display = "inline-block"; 
boton.style.fontSize = "16px"; 
boton.style.margin = "10px"; n
boton.style.borderRadius = "5px"; 

