//Creo la función que contiene la promesa
const doSomethingAsynco = () => {
    return new Promise(
        (resolve, reject) => {
            (true) ? setTimeout(()=>resolve('resuelto con async'), 2000) : reject(new Error ('error'))
        }
    );
}

//Hago el llamado a la promesa utilizando Async y Await
const doSomething = async () => {
    try {
        const something = await doSomethingAsynco();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}
//Hago el llamado a la fución en donde implementé Async Aeait
doSomething();