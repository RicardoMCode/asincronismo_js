// XMLHttpRequest : Forma antigua de hacer llamados a un servidor
//Enviar solicitudes a un servidor o API
//Se hace el llamado a la clase requerida
let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest ;
//Creo la conexión a la API
let API = 'https://rickandmortyapi.com/api/character/'
function fetchData (url_api, callback) {
    //Creo la instancia del objeto XMLHttp para hacer las consultas a la API
    let xhttp = new XMLHttpRequest();
    //Apertura - hago el llamado a la API con el metodo open
    xhttp.open('GET', url_api, true);
    //Escuchar lo que hace la conección y ejecuta una función para validar el callback
    xhttp.onreadystatechange = function (event) {
        //ESTADOS-> -0: inicializado -1: cargando , -2: cargado , -3: descarga -4: completado
        if (xhttp.readyState === 4) {
            //Verifico el estado de la petición HTTP
            //Exitosa
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
            //No exitosa
            else {
                const error = new Error("Error " + url_api);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}
//Hacemos las peticiones a la API usando Callbacks - propuestas en el curso
fetchData(API, function (error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            //Nro de personajes
            console.log(data1.info.count);
            //Nombre primero personaje
            console.log(data2.name);
            //Dimensión del primer personaje
            console.log(data3.dimension);
        })
    })
})


//Retornar cuantos Characters son de la especie Human
//Creo la conexión a la API con el filtro de especie
let API2 = 'https://rickandmortyapi.com/api/character/?species=human'
//Hago la petición a la API
fetchData(API2, function (error, data){
    if (error) return console.error(error);
    //Muestro cuantos personajes son humanos
    console.log(`El total de personajes Humanos es ${data.info.count}`);
});