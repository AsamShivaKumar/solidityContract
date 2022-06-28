// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint waves;
    mapping(address => WaveAccount) accounts;

    struct WaveAccount{
        address user;
        string[] msgs;
        uint waveCount;
    }
    
    constructor() payable{
       console.log("Inside constructor");
    }
    
    function getWaveCount() public view returns (uint){
        return waves;
    }
    
    function wave(string memory text) public{

        // default value stored within the map is "0x0000 ..." so on
        // address(0) returns this value
        if(accounts[msg.sender].user == address(0)) accounts[msg.sender].user = msg.sender;
        
        accounts[msg.sender].msgs.push(text);
        accounts[msg.sender].waveCount++;
        waves++;
    } 
    
    function getMsgs() public view returns(string[] memory){
        return accounts[msg.sender].msgs;
    }
}