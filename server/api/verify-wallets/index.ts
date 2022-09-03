import { Request, Response } from "express";
import { ethers } from "ethers";
import { MongoClient, ServerApiVersion } from "mongodb";
var fs = require("fs");
var path = require("path");

var abi = require("../../abi/Regsitry.json");

export default async (req: Request, res: Response) => {
  let uuid = req.query.uuid;
  let wallets = [req.query.wallet];

  console.log("s ", uuid);
  console.log("w ", wallets);

  const uri = `mongodb+srv://plastic:${process.env.MONGO_PASS}@cluster0.jwwc53t.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  await client.connect();
  const database = client.db("plastic");
  const salts = database.collection("salts");

  const doc = await salts.findOne({ uuid });

  if (!doc) {
    res.json({ status: "KYC_NOT_COMPLETE" });
    return;
  }

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
  for (let i = 0; i < wallets.length; i++) {
    console.log(await contract.verify(wallets[i]));
  }

  res.json({ status: "OK" });
};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
