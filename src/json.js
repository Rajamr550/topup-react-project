import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { connect } from "react-redux";

import { changeAction } from './reducers/action';

import configureStore from './store';
import { Provider } from "react-redux";




const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    changeAction: () => dispatch(changeAction),
});




function JsonDataDisplay() {




    const datas = [{ "id": 1, "plan": "truly unlimited", "details": "12 GB data, 100 free sms per day, unlimited outgoing calls", "amount": 499, "validity": "3 months" }, { "id": 2, "plan": "cricket packs", "details": "Disney + hotstar subscription for 3 months, 2GB data, outgoing calls at 1p per second", "amount": 785, "validity": "45 days" }, { "id": 3, "plan": "smart recharge", "details": "2GB data per day, outgoing calls at 60p per minute, 100 free sms per day", "amount": 325, "validity": "30 days" }, { "id": 4, "plan": "international roaming", "details": "100 mins of incoming/outgoung (India+ Local) day, countries supported: Nepal, Srilanka, Bhutan, Pakistan, Bangladesh", "amount": 899, "validity": "30 days" }];
    // const [state, setState] = useState({ "id": 1, "plan": "truly unlimited", "details": "12 GB data, 100 free sms per day, unlimited outgoing calls", "amount": 499, "validity": "3 months" })
    var navigate = useNavigate();





    return (
        <Provider store={configureStore()}>

            <div className="boot">
                <h1>TopUp Plans</h1>
                <Table bordered hover  >
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
                                    <td><Button variant="primary" onClick={this.props.item.id}>+</Button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>

                <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>
                <Link to="/pay" className="btn btn-primary">pay</Link>
            </div>

        </Provider>
    );
}




// function nav(item) {
//     var navigate = useNavigate();

//     console.log(item);
//     navigate("/pay");

// }

export default connect(mapStateToProps, mapDispatchToProps)(JsonDataDisplay);
