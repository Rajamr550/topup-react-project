import React from "react";
import { payStore } from "./Payment"


function Bill(data) {

    const state = payStore.getState();
    return (
        <div className="Bill">
            <h1>Bill</h1>
            <h2>Your Receipt is </h2>
            <p>{state}</p>

        </div>
    )
}

export default Bill;
