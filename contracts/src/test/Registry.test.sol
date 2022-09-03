// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "forge-std/Test.sol";
import "../Registry.sol";

contract RegistryTest is Test {
    event Verified(address indexed wallet);

    Registry registry;

    function setUp() external {
        registry = new Registry();
    }

    function testRegsitryVerified() public {
        assertEq(registry.verified(address(this)), false);
        registry.verify(address(this));
        assertEq(registry.verified(address(this)), true);
    }

    function testRegsitryFailsIfNotOwner() public {
        vm.expectRevert("UNAUTHORIZED");
        vm.prank(address(0xBEEF));
        registry.verify(address(this));
    }
  
}
