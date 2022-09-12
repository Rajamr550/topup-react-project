import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Bill from "./Bill";
import Payment from "./Payment";
import NoMatch from "./NoMatch";
import Layout from "./Layout";

// import reduxDemo from "./reduxDemo";
import JsonDataDisplay from "./json";


export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<JsonDataDisplay />} />
          <Route path="bill" element={<Bill />} />
          <Route path="pay" element={<Payment />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
