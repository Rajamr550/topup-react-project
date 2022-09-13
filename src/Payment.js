import React, { useEffect, useState } from "react";
import JsonDataDisplay from "./json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bill from "./Bill";
import { connect } from "react-redux";
import { store } from "./json"

import { createStore } from 'redux';


function Payment(props) {





    const value = store.getState();
    console.log("storee -- ", store.getState())
    //const [items, setItems] = useState(" ");

    //localStorage.setItem("items", value);
    // React.useEffect(() => {
    //     localStorage.setItem("item", JSON.stringify(value));
    // })
    localStorage.setItem("pay", value);


    var localData = "";
    localStorage.setItem("bill", "");

    if (value !== "") {
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
        <div className="Payment">
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
