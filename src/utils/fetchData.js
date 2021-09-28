// XMLHttpRequest : Forma antigua de hacer llamados a un servidor
//Enviar solicitudes a un servidor o API
//Se hace el llamado a la clase requerida
//FETCH USANDO ARROW FUNCTION
let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest ;
//Funció que realiza la conexión
const fetchData = (url_api) => {
    //Creo la promesa para el asincronismo
    return new Promise ((resolve, reject) => {
        //Creo la instancia del objeto XMLHttp para hacer las consultas a la API
        const xhttp = new XMLHttpRequest();
        //Apertura - hago el llamado a la API con el metodo open
        xhttp.open('GET', url_api, true);
        //Escuchar lo que hace la conección y ejecuta una función para validar el callback
        xhttp.onreadystatechange = () => {
            //ESTADOS-> -0: inicializado -1: cargando , -2: cargado , -3: descarga -4: completado
            if (xhttp.readyState === 4) {
                //Verifico el estado de la petición HTTP
            //Exitosa
            xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)): reject(new Error(`error`, url_api)) ;
            }
        };
        xhttp.send();   
    });
}
module.exports = fetchData;