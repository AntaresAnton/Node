// en simple, un callback es una función programada, pero de qué aspecto.. es una función que realizará una acción en un momento determinado, como por ejemplo, este callback de setTimeout, lo que realiza es disparar o desplegar en pantalla el contenido que está al interior de dicha función pasado 1 segundo.
setTimeout( 
    function(){
        console.log("hola mundo, ha pasado 1 segundo");
    }
    ,1000);

// con función de flecha (lo mismo de arriba)
setTimeout(() => {
    console.log("hola mundo, han pasado 2 segundos");
}, 2000);


// /////////////////////////////////////////////

const getUsuarioByID = (id,callback)=>{
    // se crea el objeto usuario
    const usuario ={
        id,
        nombre: 'Patrick'
    }
    // se agrega un setTimeout
    setTimeout(() => {
       callback(usuario); 
    }, 1500);
}

// esto implícitamente lo llama el collback, dado que donde arriba se parametrizó de la siguiente forma "id,callback", aqui abajo tiene el parámetro id, el cual es 10, y el callback sería la función de flecha que sucede al número 10
getUsuarioByID(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
    // acá se desplegaría tanto el IDBCursor, que es 10 + el nombre en uppercase
});