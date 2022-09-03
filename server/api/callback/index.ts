import { Request, Response } from "express";
import { ethers } from "ethers";
var fs = require("fs");
var path = require("path");

var abi = require("../../abi/Regsitry.json");

export default async (req: Request, res: Response) => {
  let wallet = req.body.payload.wallet;
  const provider = new ethers.providers.InfuraProvider(
    "goerli",
    process.env.INFURA_API_KEY
  );
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  let contract = new ethers.Contract(
    process.env.REGISTRY_CONTRACT,
    abi,
    signer
  );

  await contract.verify(wallet);

  res.json({ message: "Success" });
};
