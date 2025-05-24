import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friend, isVisible, setBalance }) {
	const [bill, setBill] = useState(null);
	const [userBill, setUserBill] = useState(null);
	const [payer, setPayer] = useState(-1);

	// useEffect(() => {
	// }, [isVisible]);
	if (isVisible !== friend?.id) {
		// setBill(0);
		// setUserBill(0);
		return null;
	}

	function split(payer) {
		if (payer === -1) {
			const amount = bill - userBill;
			setBalance(amount, friend.id);
			console.log(`I paid: ${amount}`);
		}
		if (payer === friend.id) {
			const amount = -userBill;
			setBalance(amount, friend.id);
			console.log(`Other paid: ${amount}`);
		}
		setBill("");
		setUserBill("");
		setPayer(-1);
	}
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<>
			<form className="form-split-bill" onSubmit={handleSubmit}>
				<h2>Split a bill with {friend.name}</h2>
				<label>💰 Bill value</label>
				<input
					type="number"
					value={bill}
					onChange={(e) => setBill(Number(e.target.value))}
				/>
				<label>💰 Your expense</label>
				<input
					type="number"
					value={userBill}
					onChange={(e) => {
						e.target.value <= bill
							? setUserBill(Number(e.target.value))
							: setUserBill(bill);
					}}
					max={bill}
				/>
				<label>💰 {friend.name}'s expense</label>
				<input type="text" value={bill - userBill} disabled />
				<label>🤮 Who is paying the bill</label>
				<select
					value={payer}
					onChange={(e) => setPayer(Number(e.target.value))}>
					<option value="-1">You</option>
					<option value={friend.id}>{friend.name}</option>
				</select>
				<Button handleClick={() => split(payer)}>Split bill</Button>
			</form>
		</>
	);
}
