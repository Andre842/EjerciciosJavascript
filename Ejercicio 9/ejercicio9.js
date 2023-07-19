let topping = prompt("Por favor ingrese el topping que desea: 1:oreo, 2:Kitkat, 3:brownie, 4:Frambuesa, 5:Ninguno ");
let topp = topping.toLowerCase();
if (topp === "oreo"){
    console.log(`El precio del helado es: $60 MXN`);
}else if(topp === "kitkat" ){
    console.log(`El precio del helado es: $65 MXN`);
}else if(topp === "brownie" ){
    console.log(`El precio del helado es: $70 MXN`);
}else if(topp === "frambuesa" ){
    console.log(`Lo sentimos, no tenemos este topping`);
}else if(topp === "ninguno" ){
    console.log(`El precio del helado es: $50 MXN`);
}else {
    console.log("Error, ingresa una opción válida");
}