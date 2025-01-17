import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.searchWrap}>
      <label htmlFor="searchValue" className={styles.searchLabel}>
        Find contacts by name
      </label>
      <input
        name="searchValue"
        id="searchValue"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={styles.searchInput}
      ></input>
    </div>
  );
};

export default SearchBox;
