import express from 'express'

const app = express();


app.get('/',(req,res)=>{
  res.status(200).json({
    message : "Hello  M3"
  })
})

app.listen(3003, ()=>{
    console.log('Server running on 3003');
})