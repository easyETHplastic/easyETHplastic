import { Request, Response } from "express";
import { ethers } from "ethers";
var fs = require("fs");
var path = require("path");

export default async (req: Request, res: Response) => {
  if (!req.query.message && !req.query.sig) {
    res.json({ error: "query.messageHashBytes or query.flatSig missing" });
    return;
  }

  // TODO: sig typecheck

  let signerAddress;
  try {
    signerAddress = ethers.utils.verifyMessage(
      req.query.message as string,
      req.query.sig as string
    );
  } catch (e) {
    res.json({ error: e.toString() });
    return;
  }

  // TODO: Check if transaction is gone through on-chain
  let abi = ["event Buy(address indexed buyer, uint256 amount, uint256 nonce)"];
  const provider = new ethers.providers.InfuraProvider(
    "goerli",
    process.env.INFURA_API_KEY
  );
  let contract = new ethers.Contract(
    process.env.PAYMENT_CONTRACT,
    abi,
    provider
  );

  let filter = contract.filters.Buy(signerAddress);
  let events = await contract.queryFilter(filter);

  if (events.length == 0) {
    res.json({ error: "tx for address not found" });
    return;
  }

  // TODO: nonce check

  // Get card details from file
  let cardData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../card_details.json"))
  );

  cardData[0].ethAmount = events[events.length - 1].args!.amount.toString();

  res.json(cardData[0]);
};
