import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ image, name, status }) {
  return (
    <div className={css.content}>
      <img src={image} alt={name} width="48" className={css.img} />
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
}
