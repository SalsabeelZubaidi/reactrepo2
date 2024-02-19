import React, { useState } from "react";

function Payment() {
    const [balance, setBalance] = useState(20);

    function handlePay() {
        if (balance>0) {
                    setBalance(prevBalance => prevBalance - 5);
        }
        else
        setBalance(prevBalance => 'no enough money');

    }

    return (
        <div>
            <p>Your current balance is: {balance}</p>
            <button onClick={handlePay}>Payment</button>
        </div>
    );
}

export default Payment;