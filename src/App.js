import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

export default function App() {
	const [friendList, setFriendList] = useState(initialFriends);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedFriend, setSelected] = useState(null);
	const [isVisible, setVisible] = useState(null);
	function handleAddFriends(value) {
		setFriendList((prev) => [...prev, value]);
	}
	function handleSelected(id) {
		const friend = friendList.find((friend) => friend.id === id);
		setSelected(friend);
		setVisible((prev) => (id !== prev ? id : null));
		setIsOpen(false);
	}
	function handleSetBalance(balance, friendId) {
		setFriendList((prev) =>
			prev.map((friend) =>
				friend.id === friendId
					? { ...friend, balance: balance + friend.balance }
					: friend
			)
		);
		// setSelected(null);
	}
	return (
		<>
			<div className="main-con">
				<div class="body">
					<div className="app">
						<div className="sidebar">
							<FriendsList
								initialFriends={friendList}
								handleSelected={handleSelected}
								isVisible={isVisible}
							/>
							<FormAddFriend
								isOpen={isOpen}
								setIsOpen={() => setIsOpen((prev) => !prev)}
								addFriend={handleAddFriends}
							/>
						</div>
						<FormSplitBill
							friend={selectedFriend}
							isVisible={isVisible}
							setBalance={handleSetBalance}
							key={selectedFriend?.id}
						/>
					</div>
				</div>
				<footer className="footer-ribbon">
					<div className="social-icons">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.github.com/devyalchemist">
							<i class="fa-brands fa-github"></i>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.x.com/devyalchemist">
							<i class="fa-brands fa-x-twitter"></i>
						</a>

						<a
							target="_blank"
							rel="noreferrer"
							href="https://instagram.com/gospel_uo">
							<i class="fa-brands fa-instagram"></i>
						</a>
					</div>
					<h2>@devyalchemist</h2>
				</footer>
			</div>
		</>
	);
}
