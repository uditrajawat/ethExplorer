import React, { useState } from "react";
import Web3 from "web3";

function TransactionData() {
  const [transactionHash, setTransactionHash] = useState("");
  const [transactionData, setTransactionData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://mainnet.infura.io/v3/12a48374152144b99fa6b4f9ebbb1d0d"
      )
    );
    const transaction = await web3.eth.getTransaction(transactionHash);
    setTransactionData(transaction);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Transaction Hash:
          <input
            type="text"
            value={transactionHash}
            onChange={(event) => setTransactionHash(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {transactionData && (
        <div>
          <p>Transaction Hash: {transactionData.hash}</p>
          <p>From: {transactionData.from}</p>
          <p>To: {transactionData.to}</p>
          <p>GasPrice: {transactionData.gas}</p>
          <p>Value: {transactionData.value}</p>
        </div>
      )}
    </div>
  );
}

export default TransactionData;
