function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;
}

function recuperarFloat(idComponente) {
    let valorTexto = document.getElementById(idComponente);
    let valorFloat = parseFloat(valorTexto.value);
    return valorFloat;
}