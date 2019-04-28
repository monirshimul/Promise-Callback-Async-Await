
getUser(1)
    .then(user=>userRepo(user.userName))
    .then(reposi=>console.log(reposi.repos[2]))
    .catch(err=>console.log(err.message));





function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('calling form user database....');
            resolve({_id:id, userName:'monir', age:32})
        }, 2000)
    })
}

function userRepo(userName){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('calling from user Repositories....')
            resolve({_userName:userName, repos:['repo1','repo2','repo3']});
        }, 2000)
    })
}