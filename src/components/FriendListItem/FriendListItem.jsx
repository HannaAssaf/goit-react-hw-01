import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ image, name, status }) => {
  return (
    <div className={css.content}>
      <img src={image} alt="Avatar" width="48" className={css.img} />
      <p className={css.name}>{name}</p>
      <p
        className={clsx({
          [css.online]: status,
          [css.offline]: !status,
        })}
      >
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
