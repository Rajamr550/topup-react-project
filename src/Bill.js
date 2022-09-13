import React from "react";

import { store } from "./json"


function Bill(data) {

    const state = store.getState();
    return (
        <div className="Bill">
            <h1>Bill</h1>
            <h2>Your Receipt is </h2>
            <p>{state}</p>

        </div>
    )
}

export default Bill;
