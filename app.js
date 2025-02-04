let amigos = [];

function limpiarInput() {
  document.getElementById("amigo").value = "";
}

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(amigo);
  }
  limpiarInput();
}
