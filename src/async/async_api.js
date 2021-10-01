//Imboco el fetch creado y guardado en utils
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';
// Hacemos el llamado a la function fetch 
const ApiReq = async () => {
    try {
        const data = await fetchData(API);
        console.log (`Cantidad de personajes: ${data.info.count}`);
        const firstCharacter = await fetchData(`${API}${data.results[0].id}`);
        console.log (`Nombre del primer personaje ${firstCharacter.name}`);
        const originCharacter = await fetchData(firstCharacter.origin.url);
        console.log (`Dimensión primer personaje ${originCharacter.dimension}`);
    } catch (error) {
        console.error(error);
    }
    
}
ApiReq();