import React from "react";

function Bill() {
    const state = localStorage.getItem("bill");
    return (
        <div className="Bill" data-testid="billTest">
            <h1>Bill</h1>
            <h2>Your Receipt is </h2>
            <h3 data-testid="billTestState">Bill Amount{state}</h3>


        </div>
    )


}

export default Bill;
