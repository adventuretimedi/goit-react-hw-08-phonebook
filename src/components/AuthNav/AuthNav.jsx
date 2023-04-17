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
            <Link to="/goit-react-hw-08-phonebook/login">Login</Link>
          </li>
          <li>
            <Link to="/goit-react-hw-08-phonebook/register">Sign up</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default AuthNav;
