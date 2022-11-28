const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt ("¿Querés comprar Baño, Casita, Raton o Collar?");
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));

        let cantidadValidada = validarCantidad(cantidad);

    switch (producto) {
        case "Baño":
            precio = 1700;
            break;
        case "Casita":
            precio = 5000;
            break;
        case "Raton":
            precio = 350;
            break;
        case "Collar":
            precio = 600;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            cantidad= 0;
    }

    totalCompra += precio * cantidadValidada;

    
    seguirComprando = confirm("¿Querés agregar otro producto?");

    } while (seguirComprando)

    const totalConDescuento = aplicarDescuento(totalCompra);
    const totalConEnvio = calcularEnvio(totalConDescuento);

    return totalConEnvio;
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe agregar un número.')
        } else {
            alert('Debe agregar una cantidad de producto.')
        }
        cantidad = parseInt(prompt("¿Cuántos querés comprar?"))
    }

    return cantidad;
};
const aplicarDescuento = (totalCompra) => {
    let totalConDescuento = 0;

    if (totalCompra >= 5000) {
        totalConDescuento = totalCompra * 0.90;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
}
const calcularEnvio = (totalCompra) => {
    let tieneEnvioADomicilio = false;

    tieneEnvioADomicilio = confirm("¿Querés envío a domicilio?");

    if (tieneEnvioADomicilio && totalCompra >= 2000) {
      alert("Tenés envio gratis. El total de tu compra es $" + totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
      totalCompra += 700;
      alert("El envío cuesta $700. El total de tu compra es $" + totalCompra);
    } else {
      alert("El total de tu compra es $" + totalCompra);
    }

    return totalCompra;
};

const calcularCantidadDeCuotas = () => {
    let cuotas = 0;
    let tieneCuotas = false;

    tieneCuotas = confirm('¿Queres pagar en cuotas?');

    if (tieneCuotas) {
        cuotas = parseInt(prompt('¿En cuantas cuotas queres pagar?'));
        if (cuotas === 0) {
            cuotas = 1;
        } else if (Number.isNaN(cuotas)) {
            calcularCantidadDeCuotas();
        }
    } else {
        cuotas = 1
    }

    return cuotas;
};

const calcularIntereses = (cuotas) => {
    let tasa = 12.3;
    let sinIntereses = 0;
    let tasaTotal = 0;
    let interesesTotales = 0;

    if (cuotas === 1) {
        return sinIntereses;
    } else {
        tasaTotal = tasa + cuotas * 0.2;
        interesesTotales = tasaTotal * cuotas;
        return interesesTotales;
    }
};

const calcularTotalAPagar = (totalCompra, cuotas, intereses) => {
    totalCompra = (totalCompra + intereses);
    let valorCuota = totalCompra / cuotas;
    alert('El total a pagar es $'+totalCompra+' en '+cuotas+' cuotas de $'+valorCuota.toFixed(2))
};

const totalCompra = comprarProductos();
const cuotas = calcularCantidadDeCuotas();
const intereses = calcularIntereses(cuotas);

calcularTotalAPagar(totalCompra, cuotas, intereses);




