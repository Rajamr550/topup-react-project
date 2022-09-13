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
    React.useEffect(() => {
        localStorage.setItem("item", JSON.stringify(value));
    })



    const localData = localStorage.getItem("pay");

    function handleClick() {
        localStorage.clear();
    }

    return (
        <div className="Payment">
            <h1>Payment Page</h1>

            <h2>Amount {localData}</h2>


            <Link to="/Bill" className="btn btn-success">PAY</Link>
            <br></br>
            <br></br>
            <Link to="/home" className="btn btn-warning" onClick={() => { handleClick(); }}>Cancel</Link>

        </div>
    )
}

export default Payment;
