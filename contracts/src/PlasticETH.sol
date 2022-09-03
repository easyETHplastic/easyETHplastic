// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@solmate/auth/Owned.sol";

contract PlasticETH is Owned {
    event Buy(address indexed buyer, uint256 amount, uint256 nonce);

    uint256 private nonce;

    constructor() Owned(msg.sender) {}

    function buy() external payable returns (uint256 nonce_) {
        nonce_ = nonce++;
        emit Buy(msg.sender, msg.value, nonce_);
    }

    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
