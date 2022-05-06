// variables 
let completos =0;
let incompleto =0;

var agregar = document.getElementById("agregar");
var mostrar = document.getElementById("mostrar");
//console.log(mostrar);
//eventos



function guardartarea() 
{
    var inputtarea = document.getElementById("tarea");
    let p = document.createElement("p"); 
    let h1 = document.createElement("h1");
    let button = document.createElement("button");
    let buttoncompletar = document.createElement("button");
    if (inputtarea.value.length>0)
    {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="delete"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path  d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37l3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"></path></svg>`;
        buttoncompletar.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="uncheck"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path  d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="check" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"></path></svg>`;    
        h1.append(inputtarea.value);
        p.append(h1);
        p.append(button);
        p.prepend(buttoncompletar);
        mostrar.append(p);
        button.addEventListener("click",function (event)
        {
            event.preventDefault();
            button.parentNode.remove();
            ocultar();
        });
        buttoncompletar.addEventListener("click",function()
        {        
            p.classList.toggle("completado");
            contar();
        });
    
            inputtarea.value = ""; 
    }
    else
        alert("Ingrese alguna tarea");
    
} 

function ocultar()
{
    let ocultarlist= document.querySelector(".list");
    let p = document.querySelectorAll(".list p");
    console.log(p);
    if (p.length > 0) 
            ocultarlist.style.display = "flex";
    else     
        ocultarlist.style.display = "none";
}

function contar()
{
    var a = document.getElementById("com");
    let b = document.getElementById("inm");
    let completado= document.querySelectorAll(".completado");
    let total= document.querySelectorAll(".list p");
    b.textContent = `incompletadas: ${total.length-completado.length}`;
    a.textContent = `completadas: ${completado.length}`;
    if (completado.length == 0) 
        a.style.display = "none";
    else     
        a.style.display = "block";

} 
  
let buttondark = document.querySelector("#buttondark");
const body = document.querySelector("body");
buttondark.addEventListener("click", function()
{
    body.classList.toggle("darkmode"); 
    if(document.body.classList.contains("darkmode"))
    {
        localStorage.setItem("dark-mode","true");
    }
    else
    {
        localStorage.setItem("dark-mode","false");
    }
});

if(localStorage.getItem("dark-mode") == "true")
{
    body.classList.add("darkmode");
}
else
{
    body.classList.remove("darkmode");
}
ocultar();
agregar.onclick = function(e)
{
    guardartarea();
    contar();
    ocultar();
} 

