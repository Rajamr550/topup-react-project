import React from "react";
import { store } from "../json";


function Child(data) {

    const state = store.getState();

    console.log(state)

    return (
        <div>
            {state}
        </div>


    )


}

export default Child;
