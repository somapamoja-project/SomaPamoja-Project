 
 const express =require('express');
 const bodyParser=require('body-parser')
 require('dotenv').config();
 const Stripe=require('stripe')(process.env.SECRET_KEY);
 var cors=require('cors');
const { async } = require('@firebase/util');

 const app=express();
 app.use(bodyParser.json());
 app.use(cors());

 const port=process.env.PORT || 3000;


 app.post("/Payment ",async (req,res)=>{
  let status,error;
  const [token,amount]=req.body;
  try{
    await Stripe.charges.create({
        source:token.id,
        amount,
        currency:'$'
    });
    status='Success'
  }catch(error){
    console.log(error)
    status='Failure '

  }
  res.json({error,status})



 })
 

 app.listen(port,error=>{
    if(error) throw error.message;
    console.log('Your server is running on port 3000')
    

 })