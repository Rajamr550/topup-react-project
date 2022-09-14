import React from "react";
import { Link } from "react-router-dom";
import { store } from "./Home";

function Payment() {
    var localData = "";

    const value = store.getState();
    console.log("storee -- ", store.getState());


    if (value !== "") {
        localStorage.setItem("pay", value);

        localData = localStorage.getItem("pay");

    }

    else {
        localData = localStorage.getItem("pay");

    }

    function handlePayClick() {
        const billValue = localStorage.getItem("pay");
        localStorage.setItem("bill", billValue);
    }

    function handleCancelClick() {
        localStorage.removeItem("pay");
    }

    return (
        <div className="Payment" data-testid="payTest">
            <h1>Payment Page</h1>

            <h2>Amount {localData}</h2>


            <Link to="/Bill" className="btn btn-success" onClick={() => { handlePayClick(); }}>PAY</Link>
            <br></br>
            <br></br>
            <Link to="/home" className="btn btn-warning" onClick={() => { handleCancelClick(); }}>Cancel</Link>

        </div>
    )
}

export default Payment;
