// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

contract Example1 {
    uint256 number;
    string str;

    receive() external payable {}

    function setNumber(uint256 _number) public {
        number = _number;
    }

    function setStr(string calldata _str) public {
        str = _str;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }

    function getStr() public view returns (string memory) {
        return str;
    }

    function sendEth(address payable recepient, uint256 value) public payable {
        payable(recepient).transfer(value);
    }
}
