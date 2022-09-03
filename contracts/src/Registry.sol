// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@solmate/auth/Owned.sol";

contract Registry is Owned {
    event Verified(address indexed wallet);

    mapping(address => bool) public verified;

    constructor() Owned(msg.sender) {}

    function verify(address _wallet) external onlyOwner {
        verified[_wallet] = true;
        emit Verified(msg.sender);
    }
}
