import React          from 'react';
import StripeCheckout from 'react-stripe-checkout';

function Stripe({ price }) {
    const cents           = price * 100;
    const publisheableKey = 'pk_test_kTSRJkTTOf6Gfro42G0n6UJb';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };  

    return (
        <StripeCheckout 
            label='Pay now!'
            name='Ecommerce'
            amount={cents}
            stripeKey={publisheableKey}
            allowRememberMe
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is ${price}`}
            panelLabel='Pay now'
            token={onToken}
        />
    );
};      

export default Stripe;