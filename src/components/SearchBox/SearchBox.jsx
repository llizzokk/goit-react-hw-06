import styles from "./SearchBox.module.css";

const SearchBox = ({ onChange, value }) => {
  return (
    <div className={styles.searchWrap}>
      <label htmlFor="searchValue" className={styles.searchLabel}>
        Find contacts by name
      </label>
      <input
        name="searchValue"
        id="searchValue"
        value={value}
        onChange={onChange}
        className={styles.searchInput}
      ></input>
    </div>
  );
};

export default SearchBox;
