import Button from "./Button";

export default function Friend({ friend, handleSelected, isVisible }) {
	return (
		<>
			<li className={isVisible === friend.id && "selected"}>
				<img src={friend.image} alt={friend.name} />
				<h3>{friend.name}</h3>
				{friend.balance < 0 ? (
					<p className="red">
						You owe {friend.name} {Math.abs(friend.balance)}
					</p>
				) : friend.balance > 0 ? (
					<p className="green">
						{friend.name} owes you {friend.balance}
					</p>
				) : (
					<p>You and {friend.name} are even</p>
				)}
				<Button handleClick={() => handleSelected(friend.id)}>
					{isVisible === friend.id ? "Deselect" : "Select"}
				</Button>
			</li>
		</>
	);
}
