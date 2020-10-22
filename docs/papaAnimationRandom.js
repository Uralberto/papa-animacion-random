const path = document.querySelectorAll("path");
const boton = document.getElementById("dadContainer_boton")


console.log(path)



let paths = [];

for (let i = 0; i <= 172; i++) {
  paths.push(path[i]);
}

function barajar(array) {
  let n = array.length - 1;
  for (let i = n; i > 1; i--) {
    let random = Math.floor(i * Math.random());
    let temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
  return array;
}

barajar(paths);



function apagarPaths() {
for (let i = 0; i <= paths.length - 1; i++) {
  let randomOpacity = Math.random()
  paths[i].style.opacity = randomOpacity;
  paths[i].style.transformOrigin= 'scale(1)';

}
}



function pintar() {
  barajar(paths);
  apagarPaths()
  let i = 0;
  let timer = window.setInterval(function () {
    paths[i].style.opacity = 1;
    if (i === paths.length - 1) {
      clearInterval(timer);
    }
    i++;
  }, 10);
}


let ciclo


function pintarCiclo() {
  barajar(paths);
  apagarPaths()
  pintar();
}

function pintarCiclos() {
  pintarCiclo()
  ciclo = setInterval(pintarCiclo, 4000 )
}


// function activarAnimacion(){
// setTimeout(cicloAnimacion, 0)
// }


function detenerPintarCiclos(){
  clearInterval(ciclo)
}

let control = 0


function togglePintarCiclos() {
  if (control===0) {
    pintarCiclos()
    control = 1  
    boton.innerHTML = '<i class="far fa-pause-circle"></i>'

  }
  else {
    detenerPintarCiclos()
    control = 0

    boton.innerHTML = '<i class="far fa-play-circle"></i>'
  }
}







// function pintar2 (){
//   barajar(paths);
//   for (let i = 0; i <= paths.length - 1; i++) {
//   paths[i].style.opacity = 0.0;
// }
// pintar()
// }

// setTimeout(pintar2, 10000)









// function pintarPath(i) {
//   paths[i].style.opacity = 1;
// }

// function pintar() {
//   let i = 0;
//   do {
//     let interval = setInterval(function () {
//       paths[i].style.opacity = 1;
//       if (i <= paths.lengt - 1) {
//         clearInterval(interval);
//       }
//     }, 1000);
//     i++;
//   } while (i <= paths.length - 1);
// }

// pintar();
