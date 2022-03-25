import { useContractReader } from "eth-hooks";
import { ethers, utils } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { BytesStringInput } from "../components";
const { constants } = require("ethers");
const { Text } = Typography;

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
export default function Home({ readContracts }) {
  var [hashData, setHashData] = useState(constants.HashZero);
  var hash = () => {
    var ye = utils.solidityKeccak256(["address", "bytes32"], [readContracts.CommitReveal.address, hashData]);
    console.log(ye);
    return ye;
  };

  return (
    <div style={{ width: 600, margin: "auto", marginTop: 32, paddingBottom: 32 }}>
      <h2>Calc Hash</h2>
      <BytesStringInput
        autofocus
        placeholder="Enter value..."
        onChange={value => {
          setHashData(value);
        }}
      />
      <Text copyable={{ text: hash }}> {hash} </Text>
  </div>
  );
}

