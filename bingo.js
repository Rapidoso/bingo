// Programa de Bingo Navideño 2020

// SCRIPT NÚMERO ALEATORIO:
// function aleatorio(min, maxi){
//   var lal;
//   lal = Math.floor(Math.random() * (maxi - min + 1)) + min;
//   return lal;
// }


// VARIABLES GLOBALES:
var contador = 0;
var usados = [];
var maxi = 100;
var min = 1;
var hero = document.getElementById("hero");
var cuenta = document.getElementById("cuenta");
var botones = document.getElementById("botones");
var pasados = document.getElementById("pasados");
var resultado = document.getElementById("resultado");
var siguiente = document.getElementById("siguiente");

// FUNCIÓN QUE GENERA NÚMEROS ALEATORIOS:
function aleatorio(){
  var numero; 
  numero = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return numero;
}

// FUNCIÓN QUE MUESTRA EN PANTALLA EL NÚMERO ALEATORIO:
function bola(){

  numero = aleatorio();  
  var aux = false;
    
  while(aux == false){

    if (usados.includes(numero)){
      aleatorio()
      numero = aleatorio();
    }

    else{
      contador += 1;
      break
    }
  }

  resultado.innerHTML = numero;
  usados.push(numero);
  cuenta.innerHTML = contador;
  
  if (contador <= 0){
  }
  
  else {
    siguiente.innerHTML = "Siguiente Número";
  }

  if (contador <= 1){
    pasados.innerHTML += numero;
  }

  else {
    pasados.innerHTML += "<b>,</b> " + numero;
  }

  if (contador >= 100){
    pasados.innerHTML += "<b>.</b>";
    botones.removeChild(document.getElementById("siguiente"))
    cuenta.innerHTML = "100 / Se acabaron los números 😎👊🏿";
  }

}

// Los addeventlisteners:
siguiente.addEventListener("click", bola);

