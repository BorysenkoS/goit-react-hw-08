import css from "./SearchBox.module.css";

import Loader from "../Loader/Loader";

import { useDispatch, useSelector } from "react-redux";

import { setFilterValue } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/filtersSlice";
import { selectLoading } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const filterValue = useSelector(selectFilter);

  const handleFilter = (event) => {
    const value = event.target.value;
    const action = setFilterValue(value);
    dispatch(action);
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchText}>Find contacts by name</p>
      <label>
        <input
          className={css.searchData}
          type="text"
          name="searchBox"
          onChange={handleFilter}
          value={filterValue}
        />
      </label>
      {isLoading && <Loader />}
    </div>
  );
};

export default SearchBox;
