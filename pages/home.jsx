import React from "react";
import Layout from "./components/Layout";
import axios from "axios";
import SipCalculator from "./components/SipCalculator";

export default function home() {
  return (
    <Layout>
      <h1 className="text-center">Home Page</h1>
      <div className="text-center">
        <SipCalculator />
      </div>
    </Layout>
  );
}
