import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            image={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
