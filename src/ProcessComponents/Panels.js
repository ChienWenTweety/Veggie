import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Dialog } from "@blueprintjs/core";
import { PurchaseItem, SalesItem } from './Items';
import { VeggieForm } from './VeggieForm.js';
import { OrderForm } from './OrderForm.js';

function PurchasePanel(props) {
	const [dialog, setDialog] = useState(false);
	const [processes, setProcesses] = useState([]);
	const [filteredProcesses, setFilteredProcesses] = useState([]);

	// Get list of batchNo.
	useEffect(() => {
		fetch("https://gist.githubusercontent.com/witalewski/fc8f043d53a0d505f84c5ddb04ae76ea/raw/7c505bbc1675a0bc8a067f8b633b531c769bb64c/data.json")
			.then(response => response.json())
			.then(data => {
				let arr = []
				data.map((item) => (
					arr.push(item.label)
				))
				setProcesses(arr)
				setFilteredProcesses(arr)
			});
	}, [props.type]
	);

	useEffect(() => {
		if (props.filter !== '') {
			let filtered = processes.filter(item => item.includes(props.filter));
			setFilteredProcesses(filtered);
		} else {
			setFilteredProcesses(processes)
		}
	}, [props.filter]
	);

	return (
		<Table>
			<thead>
				<tr>
					<th><Button onClick={() => setDialog(true)} icon="add" minimal={true}>進貨批號</Button></th>
					<th>到貨</th>
					<th>驗退貨</th>
					<th>入庫</th>
				</tr>
			</thead>
			<tbody>
				{
					filteredProcesses.map((id) => (
						<PurchaseItem
							type={props.type}
							id={id}
						/>
					))
				}
			</tbody>
			<Dialog
				className="paragraph"
				style={{ width: 400, height: 550 }}
				onClose={() => setDialog(false)}
				title="Data Input"
				isOpen={dialog}
			>
				<VeggieForm type="addPurchaseBatch" />
			</Dialog>
		</Table>
	)
}

function SalesPanel(props) {
	const [dialog, setDialog] = useState(false);
	const [processes, setProcesses] = useState([]);
	const [filteredProcesses, setFilteredProcesses] = useState([]);

	// Get list of orders.
	useEffect(() => {
		let arr = [
			{customerOrderNo: "0x001", shippingBatchNo: "0x002"},
			{customerOrderNo: "0x011", shippingBatchNo: null}
		]
		setProcesses(arr)
		setFilteredProcesses(arr)
	}, [props.type]
	);

	useEffect(() => {
		if (props.filter !== '') {
			let filtered = processes.filter(item => item.includes(props.filter));
			setFilteredProcesses(filtered);
		} else {
			setFilteredProcesses(processes)
		}
	}, [props.filter]
	);

	return (
		<Table>
			<thead>
				<tr>
					<th><Button onClick={() => setDialog(true)} icon="add" minimal={true}>建立訂單</Button></th>
					<th>出貨批號</th>
					<th>出貨</th>
					<th>賣場收穫</th>
				</tr>
			</thead>
			<tbody>
				{
					filteredProcesses.map((obj) => (
						<SalesItem
							orderNo={obj.customerOrderNo}
							batchNo={obj.shippingBatchNo}
						/>
					))
				}
			</tbody>
			<Dialog
				className="paragraph"
				style={{ width: 400, height: 550 }}
				onClose={() => setDialog(false)}
				title="Data Input"
				isOpen={dialog}
			>
				<OrderForm type="addCustomerOrder" />
			</Dialog>
		</Table>
	)
}

export { PurchasePanel, SalesPanel };