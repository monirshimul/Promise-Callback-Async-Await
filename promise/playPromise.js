

//Promise will provide eventual result from async operation.....
const prom = new Promise((resolve, reject)=>{
    //resolve(1);
    reject(new Error('look back the code....'));
});
prom

    .then((data)=>{
        console.log('Result : ', data);
    })
    .catch(err=>{
        console.log('Error : ', err.message)
    })
