import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";
import { apiLogout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
