const client=require('./Connection')
client.connect()

client.query('SELECT * from employee ',(err,result)=> {
    if(!err)
{
    console.log(result.rows);
}

    client.end();

})