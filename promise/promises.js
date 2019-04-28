
// getUser(1, function(user){
//     getRepositories(user.userName, function(repos){
//         console.log('User and Repo : ', repos.repo[1])
//         getCommitt(repos[1], function(commit){
//             console.log(commit);
//         })
//     });

// })


getUser(1)
    .then(userObj=>getRepositories(userObj.userName))
    .then(getRepos=>getCommitt(getRepos[1]))
    .then(commit=>console.log(commit))
    .catch(err=>console.log('Error', err.message));


const abc = await getUser(1)


function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading from database....');
            resolve({id:id, userName:'monir'});
        }, 2000);
    }) 
}



function getRepositories(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading from Repositories');
            resolve({userName:username ,repo:['repo1', 'repo2', 'repo3']});
        }, 2000);
    })
}




function getCommitt(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling form API');
            resolve(['commit']);
        }, 2000)
    })
}






