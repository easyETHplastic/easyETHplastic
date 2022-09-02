// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;


contract PlasticETH {
   event Buy(address indexed buyer, uint256 amount);

   function buy() external payable returns (uint256){
      emit Buy(msg.sender, msg.value);
      return msg.value;
   }
}
