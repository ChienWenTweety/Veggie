const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "shelfNo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "updateWarehouseData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "batchNo",
                "type": "address"
            }
        ],
        "name": "getNextAction",
        "outputs": [
            {
                "name": "action",
                "type": "string"
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
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "updatePurchaseData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
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
                "name": "customerOrderNo",
                "type": "address"
            },
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "addShippingBatch",
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
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "farmer",
                "type": "string"
            },
            {
                "name": "farmAddress",
                "type": "string"
            }
        ],
        "name": "addPurchaseBatch",
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
        "constant": true,
        "inputs": [
            {
                "name": "shippingBatchNo",
                "type": "address"
            }
        ],
        "name": "getShippingBatchData",
        "outputs": [
            {
                "name": "customerOrderNo",
                "type": "address"
            },
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "warehouseOfficer",
                "type": "address"
            },
            {
                "name": "pickingDateTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "shippingBatchNo",
                "type": "address"
            }
        ],
        "name": "getShippingData",
        "outputs": [
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "driver",
                "type": "string"
            },
            {
                "name": "truckNo",
                "type": "string"
            },
            {
                "name": "destination",
                "type": "string"
            },
            {
                "name": "consignor",
                "type": "address"
            },
            {
                "name": "shippingDateTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getWarehouseData",
        "outputs": [
            {
                "name": "shelfNo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "warehouseOfficer",
                "type": "address"
            },
            {
                "name": "stackDateTime",
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
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getPurchaseBatchData",
        "outputs": [
            {
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "farmer",
                "type": "string"
            },
            {
                "name": "farmAddress",
                "type": "string"
            },
            {
                "name": "purchasingOfficer",
                "type": "address"
            },
            {
                "name": "purchasingDateTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
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
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "updateInspectionData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
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
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "driver",
                "type": "string"
            },
            {
                "name": "truckNo",
                "type": "string"
            },
            {
                "name": "destination",
                "type": "string"
            }
        ],
        "name": "updateShippingData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getPurchaseData",
        "outputs": [
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "consignee",
                "type": "address"
            },
            {
                "name": "arrivalDateTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getInspectionData",
        "outputs": [
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "inspector",
                "type": "address"
            },
            {
                "name": "inspectionDateTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getReturnData",
        "outputs": [
            {
                "name": "memo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            },
            {
                "name": "inspector",
                "type": "address"
            },
            {
                "name": "goodsReturnDateTime",
                "type": "uint256"
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
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "memo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "returnGoods",
        "outputs": [
            {
                "name": "",
                "type": "bool"
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
                "name": "purchasingOfficer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
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
                "name": "farmer",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "farmAddress",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DonePurchaseBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "consignee",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DonePurchase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "inspector",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "memo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneGoodsReturn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "inspector",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneInspection",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "warehouseOfficer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "shelfNo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneWarehouse",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "warehouseOfficer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "customerOrderNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneShippingBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "consignor",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "driver",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "truckNo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "destination",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneShipping",
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

const address = "0x8f79348bc6f65377C03bF2EEba18f0656220b5E3";

export { abi, address };