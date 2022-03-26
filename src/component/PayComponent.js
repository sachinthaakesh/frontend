import React, { useEffect, useRef,useState } from 'react'


function PayWithPayPal (props) {
    const paypal = useRef();
    const [paidFor, setPaidFor] = useState(false);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: props.dish.name,
                amount: {
                  //currency_code: "US",
                  value: props.dish.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          
          const order = await actions.order.capture();
          
          setPaidFor(true);
          
          console.log(order);

        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  if (paidFor) {
    
    return (
      
        <div>
            Thanks for making the purchase.
            
        </div>
        
        
    )
}

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default PayWithPayPal