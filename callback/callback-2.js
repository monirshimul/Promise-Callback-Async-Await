
getUser(1,function(user){
    console.log(user.userName);
    userRepo(user.userName, function(repo){
        console.log(repo.repos[1]);
    })
})



function getUser(id, callback){
    setTimeout(()=>{
        console.log('calling from user database...');
        callback({id:id, userName:'monir' });
    }, 2000)
    
}


function userRepo(userName, callback){
    setTimeout(()=>{
        console.log('calling from user Repositories....');
        callback({uName:userName, repos:['repo1','repo2','repo3']});
    }, 2000)
}