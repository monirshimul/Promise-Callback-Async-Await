app.get('/', async function(req,res){
    const user = await db.getUser(req.body.id);
    res.send(user);
})