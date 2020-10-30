
// Versión 1: Ponle color a la corbata

// const path = document.querySelectorAll("path");
// const boton = document.getElementById("dadContainer_boton")

// console.log(path)

// let paths = [];

// for (let i = 0; i <= 172; i++) {
//   paths.push(path[i]);
// }

// function barajar(array) {
//   let n = array.length - 1;
//   for (let i = n; i > 1; i--) {
//     let random = Math.floor(i * Math.random());
//     let temp = array[i];
//     array[i] = array[random];
//     array[random] = temp;
//   }
//   return array;
// }


// function apagarPaths() {
// for (let i = 0; i <= paths.length - 1; i++) {
//   let randomOpacity = Math.random()
//   paths[i].style.opacity = randomOpacity;
// }
// }


// function colorRandom() {
//   let set = "0123456789ABCDEF";
//   let codigo = [];
//   for (let i = 0; i <= 5; i++) {
//     let num = Math.floor(Math.random() * 16);
//     codigo.push(set[num]);
//   }
//   let codigoColor = "#" + codigo.join("");
//   return codigoColor;
// }


// function pintar() {
//   // barajar(paths);
//   apagarPaths()
//   let i = 0;
//   let timer = window.setInterval(function () {
//     paths[i].style.opacity = 1;
//     let color = colorRandom()
//     paths[130].style.fill = color;
//     paths[131].style.fill = color;
//     if (i === paths.length - 1) {
//       clearInterval(timer);
//     }
//     i++;
//   }, 10);
// }



// let ciclo
// function pintarCiclo() {
//   // barajar(paths);
//   apagarPaths()
//   pintar();
// }

// function pintarCiclos() {
//   pintarCiclo()
//   ciclo = setInterval(pintarCiclo, 1730 )
// }

// function detenerPintarCiclos(){
//   clearInterval(ciclo)
// }

// let control = 0


// function togglePintarCiclos() {
//   if (control===0) {
//     pintarCiclos()
//     control = 1  
//     boton.innerHTML = '<i class="far fa-pause-circle"></i>'

//   }
//   else {
//     detenerPintarCiclos()
//     control = 0

//     boton.innerHTML = '<i class="far fa-play-circle"></i>'
//   }
// }


//////////////////////////////////////////////////////////////////////////////

// Versión 2 : Ponle color a la corbata

const paths = document.querySelectorAll("path");
const boton = document.getElementById("dadContainer_boton")


function activarPathsOriginales() {
for (let i = 0; i <= paths.length - 1; i++) {
  paths[i].style.opacity = 1;
  paths[i].style.strokeWidth = .5;
}
}

function colorRandom() {
  let set = "0123456789ABCDEF";
  let codigo = [];
  for (let i = 0; i <= 5; i++) {
    let num = Math.floor(Math.random() * 16);
    codigo.push(set[num]);
  }
  let codigoColor = "#" + codigo.join("");
  return codigoColor;
}


let ciclo

function pintarPaths(){
  for(let i=1; i<=172; i++){
  let op = Math.random()
  paths[i].style.opacity= op
  let color = colorRandom()
  paths[130].style.fill = color;
  paths[131].style.fill = color;
}
}

function pintarPathsCiclos(){ 
ciclo = setInterval(pintarPaths, 50) 
}


function pararPintarPathsCiclos(){
  clearInterval(ciclo)
}

let control = 0

         
function togglePintarPathsCiclos() {
  if (control===0) {
    pintarPathsCiclos()
    control = 1  
    boton.innerHTML = '<i class="far fa-pause-circle"></i>'

  }
  else {
    pararPintarPathsCiclos()
    activarPathsOriginales()
    control = 0
    boton.innerHTML = '<i class="far fa-play-circle"></i>'
  }
}