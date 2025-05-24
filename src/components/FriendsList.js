import Friend from "./Friend";

export default function FriendsList({
	initialFriends,
	handleSelected,
	isVisible,
}) {
	const friends = initialFriends;

	return (
		<>
			<ul>
				{friends.map((friend, i) => (
					<Friend
						key={friend.id}
						friend={friend}
						handleSelected={handleSelected}
						isVisible={isVisible}
					/>
				))}
			</ul>
		</>
	);
}
