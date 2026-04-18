const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto)
{
    let comision = 0
    if(numeroVentas > VENTAS_BASE)
    {
        let ventasExtra = numeroVentas - VENTAS_BASE
        comision = ventasExtra * (precioProducto * 0.10)
    }
    return comision;
}

function calcular()
{
    //funcion que solo trae texto
    // let sueldoBasestr = recuperarTexto("txtSueldoBase");
    // let numeroVentasstr = recuperarTexto("txtVentas");
    // let precioProductostr = recuperarTexto("txtVentas");

    //funcion trae texto y lo convierte a numero
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtVentas");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}