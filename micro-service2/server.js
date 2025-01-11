import express from 'express'

const app = express();


app.get('/',(req,res)=>{
  res.status(200).json({
    message : "Hello from M2"
  })
})

app.listen(3002, ()=>{
    console.log('Server running on 3002');
})