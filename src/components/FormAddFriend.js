import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ isOpen, setIsOpen, addFriend }) {
	const [friendName, setFriendName] = useState("");
	const [image, setImage] = useState("https://i.pravatar.cc/48");
	function handleSubmit(e) {
		// alert("worked");
		e.preventDefault();
	}
	function handleAdd() {
		setIsOpen();	
	}
	function add() {
		const newFriend = {
			id: Date.now(),
			name: friendName,
			image: image,
			balance: 0,
		};
		addFriend(newFriend);
		setFriendName("");
		setIsOpen();
	}
	if (!isOpen) return <Button handleClick={handleAdd}>Add Friend</Button>;
	return (
		<>
			<form className="form-add-friend" onSubmit={handleSubmit}>
				<label>🧑‍🤝‍🧑 Friend name</label>
				<input
					type="text"
					value={friendName}
					onChange={(e) => setFriendName(e.target.value)}
				/>
				<label>🖼️ Image URL</label>
				<input type="text" value={image} readOnly />
				<Button handleClick={add}>Add</Button>
			</form>
			<Button handleClick={handleAdd}>Close</Button>
		</>
	);
}
