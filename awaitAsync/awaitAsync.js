
async function notifyCustomer() {
    try {
        const customer = await getCustomer(10);
        console.log(customer);
        if (customer.isGold) {
            const movies = await getMovies();
            console.log(movies);
            const sendEail = await sendMail(customer.email[1], movies);
            console.log(`Email sent to ${customer.email[1]}`);
        }
    }
    catch (err) {
        console.log('Error :', err.message);
    }


}

notifyCustomer();





function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling the customer database....');
            resolve({
                id: id,
                name: 'monir',
                age: 32,
                email: ['monirshimul@gmail.com','omoktomok@gmail.com'],
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

function sendMail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}