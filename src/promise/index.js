//Creo la funcióm de la estructura para el manejo de promesas
const somethingWillHapped = () => {
    //Creo el objeto de tipo promesa
    return new Promise ( (resolve, reject) => {
        //Validación que permite definir si la promesa se resuelve o si se rechasa
        if (true) {
            resolve(`Resuelto con éxito`);
        } else {
            reject (`Rechasada`);
        }
    });
};
//Hago el llamado a la funció
somethingWillHapped()
//Se ejecutan lod metodos de respuesta de la promesa
    .then(res => console.log(res))
    .catch(err => console.error(err));