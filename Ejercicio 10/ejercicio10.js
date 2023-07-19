let programa = prompt("Por favor ingrese el programa al cual se desea registrar: Course, Carrera o Master");
let prog = programa.toLowerCase();
let becas = prompt("Por favor ingrese el tipo de beca con la que cuenta: Facebook,Google, Jesua o ninguna");
beca = becas.toLocaleLowerCase();
if (prog === "course"){
    if(beca === "facebook"){
        descuento = 4999 * 0.2;
        precioMes = 4999 - descuento;
        console.log(`Su cuota mensual para el Course es: $${precioMes} MXN`);
        precioTotal = precioMes * 2;
        console.log(`El valor total del Course de duración 2 meses es: $${precioTotal} MXN`);
    }else if (beca === "google"){
        descuento = 4999 * 0.15;
        precioMes = 4999 - descuento;
        console.log(`Su cuota mensual para el Course es: $${precioMes} MXN`);
        precioTotal = precioMes * 2;
        console.log(`El valor total del Course de duración 2 meses es: $${precioTotal} MXN`);
    }else if (beca === "jesua"){
        descuento = 4999 * 0.5;
        precioMes = 4999 - descuento;
        console.log(`Su cuota mensual para el Course es: $${precioMes} MXN`);
        precioTotal = precioMes * 2;
        console.log(`El valor total del Course de duración 2 meses es: $${precioTotal} MXN`);
    }else if (beca === "ninguno"){
        precioMes = 4999;
        console.log(`Su cuota mensual para el Course es: $${precioMes} MXN`);
        precioTotal = precioMes * 2;
        console.log(`El valor total del Course de duración 2 meses es: $${precioTotal} MXN`);
    }else {
        console.log("Ingrese una opción válida");
    }   
}else if (prog === "carrera"){
    if(beca === "facebook"){
        descuento = 3999 * 0.2;
        precioMes = 3999 - descuento;
        console.log(`Su cuota mensual para la carrera es: $${precioMes} MXN`);
        precioTotal = precioMes * 6;
        console.log(`El valor total de la carrera de duración 6 meses es: $${precioTotal} MXN`);
    }else if (beca === "google"){
        descuento = 3999 * 0.15;
        precioMes = 3999 - descuento;
        console.log(`Su cuota mensual para la carrera  es: $${precioMes} MXN`);
        precioTotal = precioMes * 6;
        console.log(`El valor total de la carrera de duración 6 meses es: $${precioTotal} MXN`);
    }else if (beca === "jesua"){
        descuento = 3999 * 0.5;
        precioMes = 3999 - descuento;
        console.log(`Su cuota mensual para la carrera es: $${precioMes} MXN`);
        precioTotal = precioMes * 6;
        console.log(`El valor total de la carrera de duración 6 meses es: $${precioTotal} MXN`);
    }else if (beca === "ninguno"){
        precioMes = 3999;
        console.log(`Su cuota mensual para la carrera es: $${precioMes} MXN`);
        precioTotal = precioMes * 6;
        console.log(`El valor total de la carrera de duración 6 meses es: $${precioTotal} MXN`);
    }else {
        console.log("Ingrese una opción válida");
    }   
}else if (prog === "master"){
    if(beca === "facebook"){
        descuento = 2999 * 0.2;
        precioMes = 2999 - descuento;
        console.log(`Su cuota mensual para el Matser es: $${precioMes} MXN`);
        precioTotal = precioMes * 12;
        console.log(`El valor total del Master de duración 12 meses es: $${precioTotal} MXN`);
    }else if (beca === "google"){
        descuento = 2999 * 0.15;
        precioMes = 2999 - descuento;
        console.log(`Su cuota mensual para el Matser es: $${precioMes} MXN`);
        precioTotal = precioMes * 12;
        console.log(`El valor total del Master de duración 12 meses es: $${precioTotal} MXN`);
    }else if (beca === "jesua"){
        descuento = 2999 * 0.5;
        precioMes = 2999 - descuento;
        console.log(`Su cuota mensual para el Matser es: $${precioMes} MXN`);
        precioTotal = precioMes * 12;
        console.log(`El valor total del Master de duración 12 meses es: $${precioTotal} MXN`);
    }else if (beca === "ninguno"){
        precioMes = 2999;
        console.log(`Su cuota mensual para el Matser es: $${precioMes} MXN`);
        precioTotal = precioMes * 12;
        console.log(`El valor total del Master de duración 12 meses es: $${precioTotal} MXN`);
    }else {
        console.log("Ingrese una opción válida");
    }   
}else {
    console.log("Error, ingresa una opción válida");
}