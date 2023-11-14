// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.7.1;

interface IExample1 {
    function setNumber(uint256) external;

    function setStr(string calldata) external;

    function getNumber() external returns (uint256);

    function getStr() external returns (string calldata);

    function sendEth(address, uint256) external payable;
}

contract Example2 {
    IExample1 example;

    constructor(address payable adrExample1) {
        example = IExample1(adrExample1);
    }

    receive() external payable {}

    function setNumber(uint256 _number) public {
        example.setNumber(_number);
    }

    function setStr(string calldata _str) public {
        example.setStr(_str);
    }

    function getNumber() public returns (uint256) {
        return example.getNumber();
    }

    function getStr() public returns (string memory) {
        return example.getStr();
    }

    function sendEth(address payable recepient, uint256 value) public payable {
        example.sendEth(recepient, value);
    }
}
