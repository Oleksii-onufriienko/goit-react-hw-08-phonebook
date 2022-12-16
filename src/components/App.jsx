import { Route, Routes } from "react-router-dom";
import {useEffect, lazy } from "react";
import { Layout } from './Layout/Layout';
import { useSelector,useDispatch } from "react-redux";

import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { refreshUser } from "redux/auth/authOperation";

const HomePage = lazy(() => import('../Pages/HomePage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage'));


export function App() {
  const dispatch = useDispatch();
  const isRefreshing  = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />}/>}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        </Route>
      </Routes>
  );
}
