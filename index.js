const express = require('express')
const app = express();


app.get('/', (req , res)=>{
    res.json({
        msg :"Hey aser  klajlkdjalkfj you ,Yup got aaaaaaaa my name it hello hey what's up"
    })
})



app.listen(3000 , ()=>{
    console.log('listening to port : 3000')
})