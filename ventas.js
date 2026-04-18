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

function validarSueldoBase() {
    let valor = recuperarTexto("txtSueldoBase");
    let errorDiv = document.getElementById("errorSueldoBase");
    
    if(valor === "") {
        errorDiv.textContent = "❌ No puede estar vacío";
        return false;
    }
    if(isNaN(valor)) {
        errorDiv.textContent = "❌ Solo se permiten números";
        return false;
    }
    if(valor.length > 5) {
        errorDiv.textContent = "❌ Máximo 5 dígitos";
        return false;
    }
    errorDiv.textContent = "";
    return true;
}

function validarVentas() {
    let valor = recuperarTexto("txtVentas");
    let errorDiv = document.getElementById("errorVentas");
    
    if(valor === "") {
        errorDiv.textContent = "❌ No puede estar vacío";
        return false;
    }
    if(isNaN(valor)) {
        errorDiv.textContent = "❌ Solo se permiten números";
        return false;
    }
    if(valor.length > 5) {
        errorDiv.textContent = "❌ Máximo 5 dígitos";
        return false;
    }
    errorDiv.textContent = "";
    return true;
}

function validarPrecio() {
    let valor = recuperarTexto("txtPrecio");
    let errorDiv = document.getElementById("errorPrecio");
    
    if(valor === "") {
        errorDiv.textContent = "❌ No puede estar vacío";
        return false;
    }
    if(isNaN(valor)) {
        errorDiv.textContent = "❌ Solo se permiten números";
        return false;
    }
    if(valor.length > 5) {
        errorDiv.textContent = "❌ Máximo 5 dígitos";
        return false;
    }
    errorDiv.textContent = "";
    return true;
}

function validarTodo() {
    let valido1 = validarSueldoBase();
    let valido2 = validarVentas();
    let valido3 = validarPrecio();
    return valido1 && valido2 && valido3;
}

function calcular()
{
     if(!validarTodo())
    {
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}