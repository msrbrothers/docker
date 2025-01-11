import express from 'express'

const app = express();


app.get('/',(req,res)=>{
  res.status(200).json({
    message : "node server running"
  })
})

app.listen(3000, ()=>{
    console.log('Server running on 3000');
})