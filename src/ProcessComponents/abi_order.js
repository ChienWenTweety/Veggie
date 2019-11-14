const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "customerOrderNo",
                "type": "address"
            }
        ],
        "name": "getCustomerOrder",
        "outputs": [
            {
                "name": "orderNo",
                "type": "string"
            },
            {
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "customer",
                "type": "address"
            },
            {
                "name": "salesman",
                "type": "address"
            },
            {
                "name": "orderDateTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orderNo",
                "type": "string"
            },
            {
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "customer",
                "type": "address"
            }
        ],
        "name": "addCustomerOrder",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "salesman",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "customerOrderNo",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "orderNo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "customer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneCustomerOrder",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
]

const address = "0x684Ef8EDB63Ccdc5B9d8b68157e7e006641907e7";

export { address, abi };