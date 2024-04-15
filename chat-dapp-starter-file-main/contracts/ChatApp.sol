
// SPDX-License-Identfier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ChatApp{
    // USER
    struct user{
        string name;
        friend[] friendList;
    }

    struct friend{
        address pubkey;
        string name;
    }

    struct message {
        address sender;
        uint256 timestamp;
        string msg;
    }

    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessages;

    // CHECK USER EXISTS
}
