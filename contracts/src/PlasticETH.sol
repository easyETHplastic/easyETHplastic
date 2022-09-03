// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@solmate/auth/Owned.sol";
import "./interfaces/IRegistry.sol";

contract PlasticETH is Owned {
    event Buy(address indexed buyer, uint256 amount, uint256 nonce);

    IRegistry immutable regsitry;
    uint256 private nonce;

    constructor(IRegistry _registry) Owned(msg.sender) {
        regsitry = _registry;
    }

    modifier onlyKYCd () {
        require(regsitry.verified(msg.sender), "NOT_VERIFIED");
        _;
    }

    function buy() external payable onlyKYCd returns (uint256 nonce_) {
        nonce_ = nonce++;
        emit Buy(msg.sender, msg.value, nonce_);
    }

    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
