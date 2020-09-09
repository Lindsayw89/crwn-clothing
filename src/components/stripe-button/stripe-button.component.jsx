import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton=({price})=> {
const priceForStripe = price * 100;
const publishableKey='pk_test_rehlQBg7PNnIySFVovOJJ9dO00Ou5XZAWf'


const onToken = token=>{
    console.log(token)
    alert('Payment sucess')
}


return (

<StripeCheckout
label='Pay Now'
name='CROWN Clothing Ltd'
billingAddress
shippingAddress
image='https://svgshare.com/i/CUz.svg'
description={`your total is $${price}`}
amount ={priceForStripe}
panelLabel='Pay Now'
token={onToken}
stripeKey={publishableKey}

/>


)
}
export default StripeCheckoutButton