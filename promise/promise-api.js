



const p1 = new Promise((resolve, reject)=>{
    console.log('It is from promise 1')
    resolve(1)
})

const p2 = new Promise((resolve, reject)=>{
    console.log('It is from promise 2')
    resolve(2)
})

// Promise.all([p1, p2])
//     .then(result=>{
//         console.log(result)
//     })
Promise.race([p1, p2])
    .then(result=>{
        console.log(result);
    })
