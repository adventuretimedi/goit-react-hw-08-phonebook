import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.username}>{userName}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
