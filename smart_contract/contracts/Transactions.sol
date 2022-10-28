//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

//REMEMBER - in solidity we need to define the TYPE of the variable first, be it an address, a number (called an uint), a string, etc.
//created a contract titled Transactions
contract Transactions {
    //Solidity variable - uint is an interger
    uint256 transactionCount;
    //solidity event - think of it like a function, we'll call it at some point - think of items in parenthesis as properties
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
