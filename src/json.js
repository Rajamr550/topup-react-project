import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function JsonDataDisplay() {
    const datas = [{ "id": 1, "plan": "truly unlimited", "details": "12 GB data, 100 free sms per day, unlimited outgoing calls", "amount": 499, "validity": "3 months" }, { "id": 2, "plan": "cricket packs", "details": "Disney + hotstar subscription for 3 months, 2GB data, outgoing calls at 1p per second", "amount": 785, "validity": "45 days" }, { "id": 3, "plan": "smart recharge", "details": "2GB data per day, outgoing calls at 60p per minute, 100 free sms per day", "amount": 325, "validity": "30 days" }, { "id": 4, "plan": "international roaming", "details": "100 mins of incoming/outgoung (India+ Local) day, countries supported: Nepal, Srilanka, Bhutan, Pakistan, Bangladesh", "amount": 899, "validity": "30 days" }];

    return (
        <div className="boot">
            <h1>List With Bootstrap Table</h1>
            <Table striped  >
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Plan</td>
                        <td>Details</td>
                        <td>Amount</td>
                        <td>Validity</td>
                        <td>Choose Plan</td>
                    </tr>
                    {
                        datas.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.plan}</td>
                                <td>{item.details}</td>
                                <td>{item.amount}</td>
                                <td>{item.validity}</td>
                                <td><Button variant="primary">+</Button></td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default JsonDataDisplay;
