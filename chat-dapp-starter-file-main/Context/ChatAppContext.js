import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { CheckIfWalletConnected, connectWallet, connectingToContract } from "../Utils/apiFeature";

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({children}) => {
    const [account, setAccount] = useState("");
    const [username, setUsername] = useState("");
    const [friendList, setFriendList] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    // USER DATA
    const [currentUsername, setCurrentUsername] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    // FETCH DATA
    const fetchData = async() => {
        try {
            // Getting contract and account
            const contract = await connectingToContract();
            const connectAccount = await connectWallet();
            setAccount(connectAccount);

            const username = await contract.getUsername(connectAccount);
            setUsername(username);

            const friendLists = await contract.getMyFriendList();
            setFriendList(friendLists);

            const userList = await contract.getAllAppUser();
            setUserLists(userList);

        } catch (error) {
            setError("Please install and/or connect wallet");
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    // READING MSG
    const readMsg = async(friendAddress) => {
        try {
            const contract = await connectingToContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            setError("You have no messages")
        }
    }

    // SENDING MSG
    const sendMsg = async(msg, address) => {
        try {
            if (msg || accountAddress) return setError("Must enter fields");
            
            const contract = await connectingToContract();
            const newMessage = await contract.sendMsg(address, msg);
            setLoading(true);
            await newMessage.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Please refresh the page and try again")
        }
    }

    // CREATE ACCOUNT
    const createAccount = async(name, accountAddress) => {
        try {
            // if (name || accountAddress) return setError("Must enter fields");
            
            const contract = await connectingToContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Account Creation Error")
        }
    }

    // ADDING FRIENDS
    const addFriends = async(name, accountAddress) => {
        try {
            if (name || accountAddress) return setError("Must enter fields");
            
            const contract = await connectingToContract();
            const addNewFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addNewFriend.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Adding Friends Error")
        }
    }

    // READ USER INFO
    const readUserProfile = async(userAddress) => {
        try {
            const contract = await connectingToContract();
            const username = await contract.getUsername(userAddress);
            setCurrentUsername(username);
            setCurrentUserAddress(userAddress);
        } catch (error) {
            setError("Adding Friends Error")
        }
    }

    return (
        <ChatAppContext.Provider value={{ readMsg, sendMsg, createAccount, addFriends, readUserProfile, connectWallet, CheckIfWalletConnected,
                                        account, username, friendList, friendMsg, loading, userLists, error, currentUsername, currentUserAddress}}>
            {children}
        </ChatAppContext.Provider>
    )
};
