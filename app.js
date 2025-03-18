/**
 * El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 * Challenge AMIGO SECRETO.
 * Autora: Domínguez Acosta María Guadalupe.
 * Fecha de inicio: 16/03/2025.
 * Fecha de término.

 */

/**
 * Metodología a seguir:
 * Crear un array para almacenar los nombres.
 * Implementa una función para agregar amigos.
 * Capturar el valor del campo de entrada.
 * Validar la entrada para verificar que el campo no esté vacío.
 * Actualizar el array de amigos.
 * Limpiar el campo de entrada.
 * Implementa una función para actualizar la lista de amigos.
 * Obtener el elemento de la lista.
 * Limpiar la lista existente.
 * Iterar sobre el arreglo.
 * Agregar elementos a la lista.
 * Implementa una función para sortear amigos.
 * Validar que haya amigos disponibles.
 * Generar un índice aleatorio.
 * Obtener el nombre sorteado.
 * Mostrar el resultado.
 */


let amigos = [];


function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}


function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}


function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}