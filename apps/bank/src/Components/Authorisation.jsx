import { useContext, useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
import Login from "./Login";
import { GlobalContext } from "./GlobalContext";

const loginURL = process.env.REACT_APP_URL + "/bank/api/login";

function Authorisation({ children, allowUnauthenticated }) {
  const { setAuthName, logged, setLogged } = useContext(GlobalContext);

  useEffect(() => {
    if (logged === null) {
      axios
        .get(loginURL, { withCredentials: true })
        .then((res) => {
          if (res.data.status === "valid") {
            setAuthName(res.data.getName);
            setLogged(1);
          } else {
            setAuthName(null);
            setLogged(2);
          }
        })
        .catch((_) => {
          setAuthName(null);
          setLogged(2);
        });
    }
  }, [setAuthName, setLogged, logged]);

  if (logged === null) {
    // If loading, show loader
    return <Loader />;
  }

  if (logged === 1) {
    // If logged in, show children
    return <>{children}</>;
  }

  // If not logged in and allowUnauthenticated is true, show children, otherwise show login
  return allowUnauthenticated ? <>{children}</> : <Login />;
}

export default Authorisation;
