import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Bill from "./components/pages/Bill";
import Layout from "./components/pages/Layout";
import NoMatch from "./components/pages/NoMatch";
import Payment from "./components/pages/Payment";
import JsonDataDisplay from "./components/pages/Home";



export default function App() {
  return (
    <div data-testid="app-test">
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
