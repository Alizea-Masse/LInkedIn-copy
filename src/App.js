/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Widgets from "./components/Widgets";
import { useSelector } from "react-redux";
import { selectUser,logout, login } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./components/firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));

      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* SideBar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
