import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeKey =
  "pk_test_51JziDRC8D5JL9LK3puw5V8MV5BpMYY6CTkc8UubyXAbi4RX3T6eaeBlFiZ0lhU6ZbQ1T6kiBF8zKYEl6bixvQGvg00l7oMhCsm";

export const Pay = () => {
  const onToken = (token) => {
    console.log(token)
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="eNygma"
        image="https://cdn.pixabay.com/photo/2016/08/01/10/14/maze-1560761_1280.png"
        billingAddress
        shippingAddress
        description="You total is $20"
        amount={2000}
        token={onToken}
        stripeKey={stripeKey}
      >
        <button
          style={{
            padding: 10,
            marginTop: 20,
            border: "none",
            background: "#000",
            color: "#fff",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};
