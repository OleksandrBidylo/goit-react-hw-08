import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeSearch } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrap}>
      Find contact by name
      <input
        className={s.field}
        type="text"
        onChange={(e) => {
          dispatch(changeSearch(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
