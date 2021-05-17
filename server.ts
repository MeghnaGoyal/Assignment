
const express = require('express')
const app = express()
const port = 3000

const Pool=require("pg").Pool;

const pool=new Pool(
    {
        user:"postgres",
        password:"Meg@2406",
        database:"postgres",
        host:"localhost",
        port:5432
    }
);

// app.get('/hello', (req, res) => res.send('Hello World!'))
app.get('/employees',loadData)
 async function loadData(req,res)
{
    pool.query('select * from employee order by emp_id asc')
                .then((result)=>
                {
                    res.json(result.rows);
                   
                });
    
}
app.post('/Add',AddRow)
async function AddRow(req,res)
{

    
    
    
    pool.query('insert into employee ("emp_id","emp_name","dept_no") values (2,"Harman",2)').then(
        (result)=>{
            res.send(200);
        }
        
    )};


     
app.delete('/EmployeeTable/:id',deleteRow);

async function deleteRow(req,res)
{
    
console.log("res", [req.params.id]);
    pool.query('delete from employee where emp_id = $1',[req.params.id])
                .then(()=>
                {
                    res.send("deleted")
                });

}
app.listen(port, () => console.log(`App listening on port ${port}!`))

