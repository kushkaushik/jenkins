const express = require('express')
const app = express();


app.get('/', (req , res)=>{
    res.json({
        msg :"Hey there we are just checking Jenking CI-CD Pipeline"
    })
})

app.get('/mr', (req,res)=>{


    res.json('hey mr how are you my name is kush kaushik')

})


app.listen(3000 , ()=>{
    console.log('listening to port : 3000')
})
