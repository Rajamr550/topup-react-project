import React from "react";
import JsonDataDisplay from "./json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bill from "./Bill";
import { connect } from "react-redux";
import { store } from "./json"

import { createStore } from 'redux';



const reducer = (state = " ", action) => {
    switch (action.type) {
        case 1:
            state = action.payload;
            return state;

        default:
            return state;
    }
};


export const payStore = createStore(reducer);

payStore.subscribe(() => {
    console.log('current bill state', payStore.getState());
});

function Payment(props) {



    function passToBill(val) {

        payStore.dispatch({
            type: 1,
            payload: val
        });

        console.log("bill iten form pay ", val)
    }

    const value = store.getState();


    return (
        <div className="Payment">
            <h1>Payment Page</h1>
            <h2>Amount {value}</h2>


            <Link to="/Bill" className="btn btn-success" onClick={passToBill(value)}>PAY</Link>
            <br></br>
            <br></br>
            <Link to="/home" className="btn btn-warning">Cancel</Link>

        </div>
    )
}

export default Payment;
