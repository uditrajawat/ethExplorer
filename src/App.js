import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Navbar from "./component/Navbar";
import BlockData from "./component/BlockData";
import TransactionData from "./component/TranscactionData";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div>
        <h1>Ethereum Block and Transaction Data</h1>
        <BlockData />
        {/* <br></br> */}
        <TransactionData />
      </div>
    </>
  );
}

export default App;
