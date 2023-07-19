let diaSemana = prompt("Ingresa un día de la semana");
let minus = diaSemana.toLowerCase();

if (minus === "lunes"){
    console.log(`Es Lunes `);
}else if(minus === "viernes"){
    console.log(`Es Viernes `);
}else if(minus === "sabado" || minus === "domingo" ){
    console.log(`Es Sábado o Domingo`);
}else {
    console.log("No ingresaste un día válido");
}