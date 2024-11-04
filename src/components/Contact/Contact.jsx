import { FaPhoneAlt, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <span className={s.wrap}>
          <FaUser />
          {item.name}
        </span>
        <span className={s.wrap}>
          <FaPhoneAlt />
          {item.number}
        </span>
      </div>
      <button onClick={() => dispatch(deleteContactThunk(item.id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
