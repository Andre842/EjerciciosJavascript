let numero1 = prompt("Ingresa el primer numero");
let numero2 = prompt("Ingresa el segundo numero");
let numero3 = prompt("Ingresa el tercer numero");

if (numero1 > numero2 && numero1 > numero3){
    console.log(`El número ${numero1} es el número mayor `);
}else if(numero1 < numero2 && numero2 > numero3) {
    console.log(`El número ${numero2} es el número mayor `);
}else if(numero1 < numero3 && numero2 < numero3) {
    console.log(`El número ${numero3} es el número mayor `);
}else if (numero1 === numero2 && numero1 > numero3 && numero2 > numero3) {
    console.log(`Los números ${numero1} son iguales y son los mayores `);
}else if (numero2 === numero3 && numero2 > numero1 && numero3 > numero1) {
    console.log(`Los números ${numero2} son iguales y son los mayores `);
}else if (numero3 === numero1 && numero3 > numero2 && numero1 > numero2) {
    console.log(`Los números ${numero1} son iguales y son los mayores `);
}else {
    console.log("Los tres números son iguales.");
}
