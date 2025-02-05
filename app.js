let amigos = [];

function limpiarInput() {
  document.getElementById("amigo").value = "";
}

function listaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");

  listaAmigos.innerHTML = "";

  for (i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li> ${amigos[i]} </li>`;
  }
}

function encontrarPosicion(lista, elemento) {
  return lista.indexOf(elemento);
}

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  let encontrado = encontrarPosicion(amigos, amigo);

  console.log(`encontrado: ${encontrado}`);

  if (amigo === "") {
    alert("Por favor, ingresa un nombre.");
  } else if (encontrado >= 0) {
    alert("Ese amigo ya esta jugando!, ingresa otro nombre.");
  } else {
    amigos.push(amigo);
    listaAmigos();
  }
  limpiarInput();
}

function sortearAmigo() {
  let indiceRandom = Math.floor(Math.random() * amigos.length);

  let seleccionado = amigos[indiceRandom];

  console.log(`Amigo Seleccionado: ${seleccionado}`);

  let resultado = document.getElementById("resultado");

  resultado.innerHTML = `<li> ${seleccionado} </li>`;
}
