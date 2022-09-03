// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

interface IRegistry {
    function verified(address wallet) external returns (bool);
    function verify(address _wallet) external;
}
