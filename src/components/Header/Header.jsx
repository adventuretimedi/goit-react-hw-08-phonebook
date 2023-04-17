import AuthNav from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import s from './Header.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.header}>
      <nav>
        <NavLink to="/goit-react-hw-08-phonebook/" className={s.link}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/goit-react-hw-08-phonebook/contacts" className={s.link}>
            Contacts
          </NavLink>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
