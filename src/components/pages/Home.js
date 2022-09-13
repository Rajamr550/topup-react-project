import React from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { createStore } from 'redux';
import { useState } from 'react';


const reducer = (state = "", action) => {
    switch (action.type) {
        case 1:
            state = action.payload;
            return state;

        case 2:
            state = action.payload;
            return state;

        case 3:
            state = action.payload;
            return state;


        case 4:
            state = action.payload;
            return state;

        default:
            return state;
    }
};


export const store = createStore(reducer);

store.subscribe(() => {
    console.log('current state', store.getState());
});


export function fun(item) {
    store.dispatch({
        type: item.id,
        payload: item.amount + item.plan + item.details + item.validity
    });

    console.log("item ------ ", item)
}





function JsonDataDisplay() {
    const datas = [{ "id": 1, "plan": "truly unlimited", "details": "12 GB data, 100 free sms per day, unlimited outgoing calls", "amount": 499, "validity": "3 months" }, { "id": 2, "plan": "cricket packs", "details": "Disney + hotstar subscription for 3 months, 2GB data, outgoing calls at 1p per second", "amount": 785, "validity": "45 days" }, { "id": 3, "plan": "smart recharge", "details": "2GB data per day, outgoing calls at 60p per minute, 100 free sms per day", "amount": 325, "validity": "30 days" }, { "id": 4, "plan": "international roaming", "details": "100 mins of incoming/outgoung (India+ Local) day, countries supported: Nepal, Srilanka, Bhutan, Pakistan, Bangladesh", "amount": 899, "validity": "30 days" }];
    const [data, setData] = useState("temp")

    const navigate = useNavigate();
    return (
        <div className="boot">
            <h1> TopUp Plans</h1>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Plan</td>
                        <td>Details</td>
                        <td>Amount</td>
                        <td>Validity</td>
                        <td>Choose Plan</td>
                    </tr>
                    {datas.map((item, i) => <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.plan}</td>
                        <td>{item.details}</td>
                        <td>{item.amount}</td>
                        <td>{item.validity}</td>
                        <td><Button variant="primary" onClick={() => { fun(item); navigate("/pay"); }}>+</Button></td>


                    </tr>
                    )}
                </tbody>




            </Table>





        </div >





    );












}




export default JsonDataDisplay;


