
getUser(1, function(user){
    getRepositories(user.userName, function(repos){
        console.log('User and Repo : ', repos.repo[1])
        getCommitt(repos[1], function(commit){
            console.log(commit);
        })
    });

})


function getUser(id, callback){

    setTimeout(()=>{
        console.log('Reading from database....');
        callback({id:id, userName:'monir'});
    }, 2000);
}



function getRepositories(username, callback){
    
    setTimeout(()=>{
        console.log('Reading from Repositories');
        callback({userName:username ,repo:['repo1', 'repo2', 'repo3']});
    }, 2000);
}

function getCommitt(repo, callback){
    setTimeout(()=>{
        console.log('Calling form API');
        callback(['commit']);
    }, 2000)
}






