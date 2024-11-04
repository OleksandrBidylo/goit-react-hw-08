import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const Loading = useSelector(selectLoading);
  const filteredData = useSelector(selectFilteredContacts);
  return (
    <div>
      {Loading && <h1>Loading...</h1>}
      <div className={s.wrap}>
        {filteredData.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
