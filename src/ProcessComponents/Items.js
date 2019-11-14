import React, { useState, useEffect, useContext, createContext } from 'react';
import { Button, Dialog } from "@blueprintjs/core";
import { VeggieForm } from './VeggieForm.js';
import { Web3Context } from './Web3Context';

export const ModalContext = createContext();

// purchase inspection warehouse sales shipping end

function PurchaseItem(props) {
	const [dialog, setDialog] = useState(false);
	const [current, setCurrent] = useState("INSPECTION");
	const [pending, setPending] = useState(false);
	const contract = useContext(Web3Context);

	const purchaseProcess = {
		PURCHASE: "updatePurchaseData",
		INSPECTION: "updateInspectionData",
		WAREHOUSE: "updateWarehouseData"
	};
	// async call to the contract.
	useEffect(() => { //props.id
		// contract.getNextAction("0xaad002", (error, result) => {
		// 	setCurrent(result)
		// })

	}, [props.type])

	return (
		<tr>
			<td> {props.id.slice(0, 11)} </td>
			{
				Object.keys(purchaseProcess).map((value, index) => {
					if (value === current)
						return pending
							? <td><Button key={index} icon="refresh" intent="warning" disabled={true} >Pending</Button></td>
							: <td><Button key={index} icon="add" intent="primary" onClick={() => setDialog(true)} >{value}</Button></td>
					else if (index < Object.keys(purchaseProcess).indexOf(current))
						return <td><Button key={index} icon="tick" disabled={true} intent="Success" >{value}</Button></td>
					else return <td><Button key={index} icon="cross" disabled={true} >{value}</Button></td>
				})
			}
			<ModalContext.Provider value={setDialog}>
				<Dialog
					className="paragraph"
					style={{ width: 400, height: 550 }}
					onClose={() => setDialog(false)}
					title="Data Input"
					isOpen={dialog}
				>
					<VeggieForm id={props.id} type={purchaseProcess[current]} />
				</Dialog>
			</ModalContext.Provider>
		</tr>
	);
}

function SalesItem(props) {
	const [dialog, setDialog] = useState(false);
	const [current, setCurrent] = useState("SHIPPING");
	const [pending, setPending] = useState(false);
	const contract = useContext(Web3Context);

	const salesProcess = {
		SALES: "addShippingBatch",
		SHIPPING: "updateShippingData",
		END: "addConsignmentData"
	};
	// async call to the contract.
	useEffect(() => { //props.id
		// contract.getNextAction("0xaad002", (error, result) => {
		// 	setCurrent(result)
		// })

	}, [])

	return (
		<tr>
			<td> {props.orderNo.slice(0, 11)} </td>
			{
				Object.keys(salesProcess).map((value, index) => {
					if (value === current)
						return pending
							? <td><Button key={index} icon="refresh" intent="warning" disabled={true} >Pending</Button></td>
							: <td><Button key={index} icon="add" intent="primary" onClick={() => setDialog(true)} >{value}</Button></td>
					else if (index < Object.keys(salesProcess).indexOf(current))
						return props.batchNo
						? <td><Button key={index} icon="tick" disabled={true} intent="Success" >{props.batchNo}</Button></td>
						: <td><Button key={index} icon="tick" disabled={true} intent="Success" >{value}</Button></td>
					else return <td><Button key={index} icon="cross" disabled={true} >{value}</Button></td>
				})
			}
			<ModalContext.Provider value={setDialog}>
				<Dialog
					className="paragraph"
					style={{ width: 400, height: 550 }}
					onClose={() => setDialog(false)}
					title="Data Input"
					isOpen={dialog}
				>
					<VeggieForm id={props.batchNo} type={salesProcess[current]} />
				</Dialog>
			</ModalContext.Provider>
		</tr>
	);
}

export { PurchaseItem, SalesItem };