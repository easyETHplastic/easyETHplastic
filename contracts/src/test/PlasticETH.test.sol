// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "forge-std/Test.sol";
import "../PlasticETH.sol";

contract PlasticETHTest is Test {
    event Buy(address indexed buyer, uint256 amount);

    PlasticETH plasticETH;

    function setUp() external{
        plasticETH = new PlasticETH();
        vm.deal(address(this), 1 ether);
    }

    function testBuyEmitsEvent() public {
        vm.expectEmit(true, false, false, true);
        emit Buy(address(this), 1 ether);
        plasticETH.buy{value: 1 ether}();
    }
}