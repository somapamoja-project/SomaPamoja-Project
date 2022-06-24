import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Mpesapayment from "../../Images/Mpesapayment.png";
import stripe from "../../Images/stripe.png";
import paypal from "../../Images/paypal.png";

export default function Payment() {
  const navigation = useNavigate();

  const [product, setProduct] = useState({
    name: "Premium Course ",
    price: 9.99,
  });
  const PayNow = async (token) => {
    try {
      const responce = await axios({
        url: "http://localhost:3000/Payment",
        method: "post",
        data: {
          amount: product.price * 1,
          token,
        },
      });
      if (responce.status === 200) {
        console.log("your payment is successful ");
      }
    } catch (e) {
      navigation("/ListOfCourses");

      console.log(e.message);
    }
  };

  const publishableKey =
    "pk_test_51LDRBuKw1opdyK5s8awI8Z2hNDaC0XdnEqnM0WK5vAYo5bleAKrlbgETCJ28F4ItuagNFcJNvaB1IZdAUJr8AVBy00orsDwn77";

  const priceForStripe = product.price * 117;
  return (
    <div
      className="container"
      id="paymentPage"
      style={{ position: "relative" }}
    >
      <h2>Pay your Monthly course: </h2>
      <div className="payment">
        <p> {product.name}</p>
        <p>
          Cost:<b> $ {product.price}</b> only
        </p>
        <h1>Pay Via:</h1>
      </div>
      <br />
      <div className="allPayment">
        <div
          style={{
            width: "20%",
            backgroundColor: "rgb(218, 217, 217)",
            padding: "2%",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
          className="Stripe"
        >
          <h1>
            Stripe
            <br />
            <StripeCheckout
              stripeKey={publishableKey}
              label="Pay now "
              billingAddress
              shippingAddress
              amount={priceForStripe}
              description={`Your total is $ ${product.price}`}
              token={PayNow}
            />
          </h1>
          <img src={stripe} alt="loading..." />
          <p>
            {" "}
            Stripe is a pay-as-you-go payment processing platform with
            flat-rate, transaction-based fees. Overall, you’ll pay 2.9% plus 30
            cents per transaction to accept card payments online and 2.7% plus 5
            cents to accept in-person payments with Stripe. It does not charge
            monthly or annual fees.
          </p>
        </div>

        <div
          className="Mpesa"
          style={{
            width: "20%",
            backgroundColor: "rgb(218, 217, 217)",
            padding: "2%",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
        >
          <h1>
            Mpesa
            <br />
            <button
              className="btn btn-dark"
              id="payNowMpesa"
              onClick={() => {
                navigation("/Payment-via-Mpesa");
              }}
            >
              Pay Now
            </button>
          </h1>

          <img src={Mpesapayment} alt="loading..." />
          <p>
            There are no customer charges for payments made to the M-PESA
            Business Till except for payments made at fuel stations.
          </p>
        </div>
        <div
          style={{
            width: "20%",
            backgroundColor: "rgb(218, 217, 217)",
            padding: "2%",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
          className="paypal"
        >
          <h1>
            Paypal
            <br />
            <button
              className="btn btn-dark"
              id="payNowPaypal"
              onClick={() => {
                navigation("/Payment-via-PayPal");
              }}
            >
              Pay Now
            </button>
          </h1>
          <img src={paypal} alt="loading..." /> <br /><br/>
          PayPal's payment processing rates range from 1.9% to 3.5% of each
          transaction, plus a fixed fee ranging from 5 cents to 49 cents. The
          exact amount you pay depends on which PayPal product you use
        </div>
      </div>

      <h5 id="development"></h5>
    </div>
  );
}
