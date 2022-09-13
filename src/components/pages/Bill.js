import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print"

function Bill() {

    const Print = () => {
        const compRef = useRef();
        const handlePrint = useReactToPrint({
            content: () => compRef.current,
        });

        return (
            <div>
                <Bill ref={compRef} />
                <button onClick={handlePrint}>Print</button>
            </div>
        )
    }

    const state = localStorage.getItem("bill");
    return (
        <div className="Bill">
            <h1>Bill</h1>
            <h2>Your Receipt is </h2>
            <h3>{state}</h3>


        </div>
    )


}

export default Bill;
