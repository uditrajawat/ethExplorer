import React, { useState } from "react";
import Web3 from "web3";

function BlockData() {
  const [blockNumber, setBlockNumber] = useState("");
  const [blockData, setBlockData] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  // Check if MetaMask is connected on component mount
  React.useEffect(() => {
    async function checkMetaMask() {
      if (window.ethereum) {
        setWeb3(new Web3(window.ethereum));
        setIsMetaMaskConnected(true);
        try {
          // Request account access if needed
          await window.ethereum.enable();
        } catch (error) {
          console.log(error);
        }
      } else if (window.web3) {
        setWeb3(new Web3(window.web3.currentProvider));
        setIsMetaMaskConnected(true);
      } else {
        console.log("No MetaMask found");
        setWeb3(
          new Web3(
            new Web3.providers.HttpProvider(
              "https://mainnet.infura.io/v3/12a48374152144b99fa6b4f9ebbb1d0d"
            )
          )
        );
      }
    }
    checkMetaMask();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isMetaMaskConnected) {
      const block = await web3.eth.getBlock(blockNumber);
      setBlockData(block);
    } else {
      // Fetch data from backend if MetaMask is not connected
      // Make a call to your backend API to fetch the data
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Block Number:
          <input
            type="text"
            value={blockNumber}
            onChange={(event) => setBlockNumber(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {blockData && (
        <div>
          <p>Block Number: {blockData.number}</p>
          <p>Block Hash: {blockData.hash}</p>
        </div>
      )}
    </div>
  );
}

export default BlockData;
