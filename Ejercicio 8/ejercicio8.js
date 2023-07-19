let numero = prompt("Ingresa tu calificación (entre 1 y 10)");
if (numero >= 1.0 && numero <= 10.0){
    if (numero <= 5.9){
        console.log(`Reprobado `);
    }else if(numero >= 6.0 && numero<=8.0){
        console.log(`Regular `);
    }else if(numero >=9.0 && numero<=9.9){
    console.log(`Bien `);
    }else {
    console.log(`Excelente`);
    }
}else {
    console.log("Error, ingresa una calidicación válida");
}