//EJERCICIO 1
//Función base (callback)
function sum(n1, n2) {
    return n1 + n2;
}
//Función en donde se hará el llamado a otra usando callback 
function calc (n1, n2, callback) {
    return callback(n1, n2);
}
//Llamo la función y le envio el callback sum
console.log(calc(2, 2, sum));

//EJERCICIO 2
//Función en donde se llama al callbak
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}
//Función base (callback)
function printDate(dateNow) {
    console.log(dateNow);
}
//Se hace el llamado a la función date enviandole el callBack: función printDate
date(printDate);