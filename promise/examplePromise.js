
function msgAfterTimeout(message, name, timeout){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${message} hello ${name}!`), timeout
        })
    })
}

msgAfterTimeout("","Monir", 100)
    .then(data1 => msgAfterTimeout(data1, "Shimul", 200))
    .then(data2 => { console.log(`Done after 300ms : ${data2}`)})