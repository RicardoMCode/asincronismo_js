//Imboco el fetch creado y guardado en utils
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';
// Hacemos el llamado a la function fetch 
fetchData(API)
    .then(data => {
        console.log (`Cantidad de personajes: ${data.info.count}`);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log (`Nombre del primer personaje ${data.name}`);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log (`Dimensión primer personaje ${data.dimension}`);
    })
    .catch(err => console.error(err));