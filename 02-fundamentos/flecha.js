// esta es una función normal, común y silvestre
function sumar (a,b){
    return a+b;
}
console.log(sumar(5,10));


// funciones de flecka
// le cambio de nombres para que no me tire errores, 
const sumar1 = (a,b) =>{
    return a+b;
}
console.log(sumar1(5,15));

// esta es la misma lógica, pero se le agrega un parámetro directo al argumento
const sumar2 = (a,b = 10) =>{
    return a+b;
}
console.log(sumar2(15));
// esto debería arrojar 20

// otra opción de función de flecha
// se quita el return
const sumar3 = (a,b) => a+b;
console.log(sumar3(15,15));
// esto debería arrojar 30

// y en el caso que no se necesite ningún argumento, se deja vacío. ejemplo:
const saludar = () => "Hola mundo";
// la flecha básicamente cumpliría como un return implícito
console.log(saludar());
// esta función debería desplegar "hola mundo"
// con la función de arriba, nos ahorraríamos de hacer esto:
function saludar(){
    return 'Hola Mundo';
}

