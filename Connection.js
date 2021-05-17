const Pool =require('pg').Pool;
const client= new Client(

    {
        host:"localhost",
        port: 5432,
        user:"postgres",
        password:"Meg@2406",
        database:"postgres"

    }
)
client.on("connect",()=>{

    console.log("Database Connection");
})

client.on("end",()=>{

    console.log("Connection end");
})
module.exports= pool;
