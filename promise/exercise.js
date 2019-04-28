
async function notifyCustomer() {
    const customer = await getCustomer(2);
    console.log(customer);
    if (customer.isGold) {
        const movies = await getMovies();
        console.log(movies);
        const sendEail = await sendMail(customer.email, movies);
        console.log(`Email sent to ${customer.email}`);
    }

}

notifyCustomer();





function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling the customer database....');
            resolve({
                id: 0,
                name: 'monir',
                age: 32,
                email: 'monirshimul@gmail.com',
                isGold: true
            })
        }, 2000)

    })
}


function getMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Searching the movie list....')
            resolve(['movie1', 'movie2', 'movie3'])
        }, 2000)

    })
}

function sendMail(email, movies){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        }, 2000)
    })
}