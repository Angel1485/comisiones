//funcion que solo trae texto
function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;
}

//funcion trae texto y lo convierte a numero
function recuperarFloat(idComponente) {
    let valorTexto = document.getElementById(idComponente);
    let valorFloat = parseFloat(valorTexto.value);
    return valorFloat;
}