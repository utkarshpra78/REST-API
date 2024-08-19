const express = require('express')
const users=require('./DATA.json')
const app = express();

const PORT=8000;

app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map(user=>`<li>${user.name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

//GET /api/user/:id

app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>{
        user.id===id;
    })
    return res.json(user)
})

app.post('/api/users',(req,res)=>{
    //create new user
    return res.json({
        "status":"pending"
    })
})

app.patch('/api/users/:id',(req,res)=>{
    //todo edit the user with id
    return res.json({
        "status":"pending"
    })
})

app.delete('/api/users/:id',(req,res)=>{
    //delete the use with id
    return res.json({
        "status":"pending"
    })
})

app.listen(8000)