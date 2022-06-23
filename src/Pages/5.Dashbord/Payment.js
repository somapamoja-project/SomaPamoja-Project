import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useState } from "react";
import './Style.css'
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigation=useNavigate()
  
  const [product, setProduct] = useState({
    name: "Premium Course ",
    price: 9.9,
  });
  const PayNow=async token =>{
    try{
        const responce = await axios({
            url:'http://localhost:3000/Payment',
            method:'post',
            data:{
                amount: (product.price * 117),
                token
            }
        })
        if(responce.status===200){
            console.log('your payment is successful ')

        }

    }
    catch(e){
      navigation('/ListOfCourses')
     

         console.log(e.message)
          
        
        
      

    }}


  
  const publishableKey= "pk_test_51LDRBuKw1opdyK5s8awI8Z2hNDaC0XdnEqnM0WK5vAYo5bleAKrlbgETCJ28F4ItuagNFcJNvaB1IZdAUJr8AVBy00orsDwn77"


  const priceForStripe = (product.price * 117);
  return (
    <div>
      <h1>Pay your Monthly course: </h1>

      <p>
        {" "}
        <span>{product.name}</span>
      </p>
      <p>
        <span>Cost: $ {product.price}</span>
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay now , 1$ is 117"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $ ${product.price}`}
        token={PayNow}
      />
      <h5 id="development"></h5>
    </div>
  );
}
