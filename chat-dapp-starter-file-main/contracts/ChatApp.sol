
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

    struct AllUsers {
        string name;
        address acctAddress;
    }

    AllUsers[] getAllUsers;

    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessages;

    // CHECK USER EXISTS
    function checkUserExists(address pubkey) public view returns(bool){
        return bytes(userList[pubkey].name).length > 0;
    }

    // CREATE ACCOUNT
    function createAccount(string calldata name) external{
        require(checkUserExists(msg.sender) == false, "User Already Exists");
        require(bytes(name).length > 0, "Username must not be empty");

        userList[msg.sender].name = name;

        getAllUsers.push(AllUsers(name, msg.sender));
    }

    // GET USERNAME
    function getUsername(address pubkey) external view returns(string memory){
        require(checkUserExists(pubkey), "User is not registered");
        return userList[pubkey].name;
    }

    // ADD FRIENDS
    function addFriend(address friend_key, string calldata name) external{
        require(checkUserExists(msg.sender), "Create an account first");
        require(checkUserExists(friend_key), "User is not registered");
        require(msg.sender != friend_key, "User cannot add themself as friend");
        require(checkAlreadyFriends(msg.sender, friend_key) == false, "User is already a friend");

        _addFriend(msg.sender, friend_key, name);
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);
    }

    // CHECK IF ALREADY FRIENDS
    function checkAlreadyFriends(address pubkey1, address pubkey2) internal view returns(bool){
        if(userList[pubkey1].friendList.length > userList[pubkey2].friendList.length) {
            address tmp = pubkey1;
            pubkey1 = pubkey2;
            pubkey2 = tmp;
        }

        for (uint256 i = 0; i < userList[pubkey1].friendList.length; i++){
            if (userList[pubkey1].friendList[i].pubkey == pubkey2)
                return true;
        }

        return false;
    }

    // ADD FRIEND SUBFUNCTION
    function _addFriend(address self, address friend_key, string memory name) internal{
        friend memory newFriend = friend(friend_key, name);
        userList[self].friendList.push(newFriend);
    }

    // GET MY FRIEND
    function getMyFriendList() external view returns (friend[] memory) {
        return userList[msg.sender].friendList;
    }

    // GET CHAT ID
    function _getChatID(address pubkey1, address pubkey2) internal pure returns(bytes32) {
        if (pubkey1 < pubkey2){
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        }
        else return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }

    // SEND MESSAGE
    function sendMsg(address friend_key, string calldata _msg) external {
        require(checkUserExists(msg.sender), "Create an account first");
        require(checkUserExists(friend_key), "User does not exist");
        require(checkAlreadyFriends(msg.sender, friend_key), "You are not friends with the user");

        bytes32 chatID = _getChatID(msg.sender, friend_key);
        message memory newMsg = message(msg.sender, block.timestamp, _msg);
        allMessages[chatID].push(newMsg);
    }

    // READ MESSAGES
    function readMessage(address friend_key) external view returns(message[] memory) {
        bytes32 chatID = _getChatID(msg.sender, friend_key);
        return allMessages[chatID];
    }

    // GET ALL USERS
    function getAllUsersFunc() public view returns(AllUsers[] memory) {
        return getAllUsers;
    }
}
