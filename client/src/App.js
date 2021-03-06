import { useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "./context/userContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthPage from "./pages/auth";
import Home from "./pages/home";

import AddCollection from "./pages/addCollect";
import AddLiteratur from "./pages/addLiteratur";
import MyCollection from "./pages/myCollection";
import Profile from "./pages/profile";
import BookVerification from "./pages/verification";
import DetailMyLiteratures from "./pages/detailMyLiteratur";

import { API, setAuthToken } from "./config/api";
import DeetailCollect from "./pages/detailCollect";
import Approvel from "./pages/approve";
import CancelLiteratur from "./pages/cancel";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function PrivateRoute({ children, ...rest }) {
  let history = useHistory();
  let usersData = JSON.parse(localStorage.getItem("users"));

  return (
    <Route
      {...rest}
      render={() => {
        if (usersData.role === "admin") {
          return children;
        } else {
          return history.push("/home");
        }
      }}
    />
  );
}

function App() {
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, [state]);

  return (
    <>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/my-collection" component={MyCollection} />
        <Route exact path="/add-collection/:id" component={AddCollection} />
        <Route exact path="/add-literatur" component={AddLiteratur} />
        <Route exact path="/my-literatur/:id" component={DetailMyLiteratures} />
        <Route exact path="/detail-collect/:id" component={DeetailCollect} />
        <Route exact path="/profile" component={Profile} />
        <PrivateRoute>
          <Route exact path="/verification" component={BookVerification} />
          <Route exact path="/approve" component={Approvel} />
          <Route exact path="/cancel" component={CancelLiteratur} />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
