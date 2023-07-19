
//la cantidad de kilómetros recorridos y la cantidad de litros consumidos.
let vehiculo = prompt("Por favor ingrese el tipo de vehículo: coche, moto o autobús");
let prog = vehiculo.toLowerCase();
let kms = prompt("Por favor ingrese la catidad de kilómetros recorridos: ");
let lts = prompt("Por favor ingrese la catidad de Litros consumidos: ");
let precioKm;
let extra;
if (vehiculo == "coche") {
    precioKm = 0.20;
} else if (vehiculo == "moto") {
    precioKm = 0.10;
} else if (vehiculo == "autobus") {
    precioKm = 0.5;
} else {
    "Vehículo no válido"
}


if (lts <= 100) {
    extra = 5;
}else {
    extra = 10;
}

let total = (precioKm * kms) + extra;

console.log(`El total a pagar es: ${total} pesos`);