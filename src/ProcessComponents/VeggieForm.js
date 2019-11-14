import React, { useEffect, useState, useContext } from 'react';
import { NumericInput, FormGroup, InputGroup, Button, Dialog } from "@blueprintjs/core";
import { ModalContext } from './Items.js';
import { Web3Context } from './Web3Context';


function VeggieForm(props) {
	// const setDialog = useContext(ModalContext);
	const contract = useContext(Web3Context);
	const [fields, setFields] = useState([]);
	const [inputs, setInputs] = useState({

	});

	useEffect(() => {
		contract.abi.find((element) => {
			if (element.name === props.type) {
				setFields(element.inputs)
				// const obj = Object.assign({}, ...element.inputs.map(x => ({ [x.name]: null })));
				// setInputs(obj)
				return element
			}
		})
	}, [props.type]);

	const handleTextChange = (event) => {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))
	}

	const handleSubmit = () => {
		let args = []
		fields.forEach((element) => {
			args.push(inputs[element.name])
		})
		contract[props.type](...args, (error, result) => {
			if (error) {
				console.log(error)
			}
			console.log(result)
		})
	}

	return (
		<div style={{ margin: 20 }}>
			{
				fields.map((value, index) => {
					if (index === 0)
						return <FormGroup
							label={value.name}
							labelInfo="(required)"
							intent="warning"
						>
							<InputGroup
								onChange={handleTextChange}
								name={value.name} //Used in handler
								value={props.id}
								placeholder={value.type}
								intent="warning"
								required
							/>
						</FormGroup>

					if (value.type === 'uint256')
						return <FormGroup
							key={index}
							label={value.name}
							labelInfo="(required)"
							intent="warning"
						>
							<NumericInput
								id={value.name}
								onValueChange={(valueAsNumber) => setInputs(
									prev => ({ ...prev, [value.name]: valueAsNumber })
								)}
								min="0"
								clampValueOnBlur="true"
								fill={true}
								placeholder={value.type}
								intent="warning"
								required
							/>
						</FormGroup>

					return <FormGroup
						label={value.name}
						labelFor="text-input"
						labelInfo="(required)"
						intent="warning"
					>
						<InputGroup
							onChange={handleTextChange}
							name={value.name} //Used in handler
							id="text-input"
							placeholder={value.type}
							intent="warning"
							required
						/>
					</FormGroup>

				}
				)
			}
			<Button onClick={handleSubmit} type="submit" intent="warning" >
				Submit
			</Button>
		</div>
	);

	switch (props.type) {
		case "1":
			return (
				<div>
					<FormGroup
						label="Goods Information"
						labelFor="goodsInfo"
						labelInfo="(required)"
						intent="warning"
					>
						<InputGroup intent="warning" />
					</FormGroup>
					<FormGroup
						label="Quantity"
						labelFor="quantity"
						labelInfo="(required)"
						intent="warning"
					>
						<NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>
					<FormGroup
						label="Farmer"
						labelFor="farmer"
						labelInfo="(required)"
						intent="warning"
					><InputGroup intent="warning" />
					</FormGroup>
					<FormGroup
						label="Farm Address"
						labelFor="farmAddress"
						labelInfo="(required)"
						intent="warning"
					><InputGroup intent="warning" />
					</FormGroup>
				</div>
			);
		case "2":
			return (
				<div>
					<FormGroup
						label="Quantity"
						labelFor="quantity"
						labelInfo="(required)"
						intent="warning"
					><NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>
				</div>);
		case "warehouse":
			return (
				<div>
					<FormGroup
						label="Memo"
						labelFor="memo"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
					<FormGroup
						label="Quantity"
						labelFor="quantity"
						labelInfo="(required)"
						intent="warning"
					><NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>
				</div>);
		case "4":
			return (
				<div>
					<FormGroup
						label="Quantity"
						labelFor="quantity"
						labelInfo="(required)"
						intent="warning"
					><NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>
				</div>);
		case "5":
			return (
				<div>
					<FormGroup
						label="Shelf Number"
						labelFor="shelfNo"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
					<FormGroup
						label="Quantity"
						labelFor="quantity"
						labelInfo="(required)"
						intent="warning"
					><NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>
				</div>);
		case "6":
			return (
				<div>
					<FormGroup
						label="Customer Order Number"
						labelFor="customerOrderNo"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
					<FormGroup
						label="Quantity"
						labelFor="quantity"
						labelInfo="(required)"
						intent="warning"
					><NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>
				</div>);
		case "7":
			return (
				<div>
					<FormGroup
						label="Driver"
						labelFor="driver"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
					<FormGroup
						label="Truck Number"
						labelFor="truckNo"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
					<FormGroup
						label="Destination"
						labelFor="destination"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
				</div>);
		case "8":
			return (
				<div>
					<FormGroup
						label="Order Number"
						labelFor="orderNo"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
					<FormGroup
						label="Goods Information"
						labelFor="goodsInfo"
						labelInfo="(required)"
						intent="warning"
					><InputGroup />
					</FormGroup>
					<FormGroup
						label="Quantity"
						labelFor="quantity"
						labelInfo="(required)"
						intent="warning"
					><NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>
					<FormGroup
						label="Defective Quantity"
						labelFor="defectiveQuantity"
						labelInfo="(required)"
						intent="warning"
					><NumericInput
							intent="warning"
							min="0"
							clampValueOnBlur="true"
							placeholder="Please enter an integer number!"
							fill="true"
						/>
					</FormGroup>

				</div>);

		default: break;
	}

}

export { VeggieForm };