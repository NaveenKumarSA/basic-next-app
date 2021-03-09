import React from "react";
import Layout from "./components/Layout";
import axios from "axios";

function apiRequest() {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://morning-star.p.rapidapi.com/market/v2/get-movers',
      headers: {
        'x-rapidapi-key': 'f69831cf66msh57352fc0ead37e3p1b0910jsn8fbce139b0b7',
        'x-rapidapi-host': 'morning-star.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  alert("done!");
}

export default function home() {
  return (
    <Layout>
      <h1 className="text-center">This is the home Page</h1>
      <button
        className="bg-info"
        onClick={() => {
          apiRequest();
        }}
      >
        {" "}
        fetch News
      </button>
    </Layout>
  );
}
