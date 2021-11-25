import { useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "./context/userContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthPage from "./pages/auth";
import Home from "./pages/home";
import SearchResult from "./pages/searchResult";

import { API, setAuthToken } from "./config/api";
import AddCollection from "./pages/addCollect";
import AddLiteratur from "./pages/addLiteratur";
import MyCollection from "./pages/myCollection";

function App() {
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // // Redirect Auth
    // if (state.isLogin === false) {
    //   history.push("/auth");
    // } else {
    //   if (state.user.status === "admin") {
    //     history.push("/product-admin");
    //   } else if (state.user.status === "customer") {
    //     history.push("/");
    //   }
    // }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
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
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={SearchResult} />
        <Route exact path="/add-collection" component={AddCollection} />
        <Route exact path="/add-literatur" component={AddLiteratur} />
        <Route exact path="/my-collection" component={MyCollection} />
      </Switch>
    </>
  );
}

export default App;
