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

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(amigo);
    listaAmigos();
  }
  limpiarInput();
}
