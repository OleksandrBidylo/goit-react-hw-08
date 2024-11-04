import "./App.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import ContactsPg from "./pages/ContactsPg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { refresh } from "./redux/auth/operations";
import { PrivatRoute } from "./Routes/PrivatRoutes";
import { RestrictedRoute } from "./Routes/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <div className="mx-auto mx-auto w-7 mt-96">
      <span className="loading loading-spinner text-secondary  w-52"></span>
    </div>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivatRoute component={ContactsPg} redirectTo="/login" />}
          />
        </Route>

        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
