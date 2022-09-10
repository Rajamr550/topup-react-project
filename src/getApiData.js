import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {


    const url = "https://apis-react-training.herokuapp.com/getPlan";

    const data = [{ "id": 1, "plan": "truly unlimited", "details": "12 GB data, 100 free sms per day, unlimited outgoing calls", "amount": 499, "validity": "3 months" }, { "id": 2, "plan": "cricket packs", "details": "Disney + hotstar subscription for 3 months, 2GB data, outgoing calls at 1p per second", "amount": 785, "validity": "45 days" }, { "id": 3, "plan": "smart recharge", "details": "2GB data per day, outgoing calls at 60p per minute, 100 free sms per day", "amount": 325, "validity": "30 days" }, { "id": 4, "plan": "international roaming", "details": "100 mins of incoming/outgoung (India+ Local) day, countries supported: Nepal, Srilanka, Bhutan, Pakistan, Bangladesh", "amount": 899, "validity": "30 days" }];

    console.log(" data ", data);
    // axios.get(url, {
    //     'Content-Type': 'application/json',
    //     'Accept': '*/*',
    //     // 'Access-Control-Allow-Origin': '*'
    // });
    const [posts, setPosts] = useState([])

    useEffect(() => {

        axios
            .get(url)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // useEffect(() => {

    //     axios({
    //         method: 'get',
    //         url: `https://apis-react-training.herokuapp.com/getPlan`,
    //         withCredentials: false,
    //         // params: {
    //         //     access_token: SECRET_TOKEN,
    //         // },
    //     });


    //}, [])




    return (
        <div>

            <ul>
                {
                    data.map(post => (
                        <><><li key={post.id}> {post.plan} </li><li>{post.amount}</li></><li>{post.details}</li></>
                    ))
                }

            </ul>
        </div>
    )
}

export default DataFetching;