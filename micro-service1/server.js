import express from 'express'

const app = express();


app.get('/',(req,res)=>{
  res.status(200).json({
    message : "Hello from M1"
  })
})

app.listen(3001, ()=>{
    console.log('Server running on 3001');
})