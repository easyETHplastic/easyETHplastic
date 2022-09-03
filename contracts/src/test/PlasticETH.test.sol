// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "forge-std/Test.sol";
import "../PlasticETH.sol";
import "../Registry.sol";

contract PlasticETHTest is Test {
    event Buy(address indexed buyer, uint256 amount, uint256 nonce);

    PlasticETH plasticETH;
    Registry registry;

    function setUp() external {
        registry = new Registry();
        registry.verify(address(this));
        plasticETH = new PlasticETH(IRegistry(address(registry)));
        vm.deal(address(this), 10 ether);
    }

    function testBuyEmitsEvent() public {
        vm.expectEmit(true, false, false, true);
        emit Buy(address(this), 1 ether, 0);
        plasticETH.buy{value: 1 ether}();
    }

    function testBuyRevertsIfNotVerified() public {
        vm.deal(address(0xBEEF), 1 ether);
        vm.prank(address(0xBEEF));
        vm.expectRevert("NOT_VERIFIED");
        plasticETH.buy{value: 1 ether}();
    }

    function testWithdraw() public {
        plasticETH.buy{value: 1 ether}();
        plasticETH.buy{value: 1 ether}();
        plasticETH.withdraw();
        assertEq(address(this).balance, 10 ether);
    }

    function testWithdrawFailIfNotOwner() public {
        plasticETH.buy{value: 1 ether}();
        vm.prank(address(0xBEEF));
        vm.expectRevert("UNAUTHORIZED");
        plasticETH.withdraw();
    }

    receive() external payable {}
}
