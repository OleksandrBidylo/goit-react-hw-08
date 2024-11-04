import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <header className="bg-slate-900 p-4">
        <div className="flex justify-between text-xl">
          <h2 className="">ContactsApp</h2>
          {isLoggedIn && (
            <p className="font-bold text-2xl text-orange-400">{user.name}</p>
          )}

          <div className="flex gap-2 items-center">
            <NavLink className=" " to="/contacts">
              Contacts
            </NavLink>

            {!isLoggedIn && (
              <>
                <NavLink className=" btn" to="/login">
                  Login
                </NavLink>
                <NavLink className=" btn" to="/register">
                  Register
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <button className="btn" onClick={() => dispatch(logout())}>
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
