import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const authorized = useSelector(selectIsLoggedIn);

  return (
    <>
      {!authorized && (
        <ul className={s.list}>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default AuthNav;
