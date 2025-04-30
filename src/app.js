import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    const part1 = who[Math.floor(Math.random() * who.length)];
    const part2 = action[Math.floor(Math.random() * action.length)];
    const part3 = what[Math.floor(Math.random() * what.length)];
    const part4 = when[Math.floor(Math.random() * when.length)];

    return `${part1} ${part2} ${part3} ${part4}`;
  }

  const excuseElement = document.getElementById("excuse");  //obtener donde mostrar excusa
  excuseElement.innerText = generateExcuse(); //generar excusa al cargar la pagina
  const button = document.getElementById("new-excuse"); //obtener el boton
  button.addEventListener("click", function() { //añado funcion al boton para guardar cuando se hace click
    excuseElement.innerText = generateExcuse(); //al hacer click llama a la funcion para generar una nueva excusa
  });
  
  }

