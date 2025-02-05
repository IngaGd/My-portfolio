import { useEffect, useState } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_URL + "users";

export const useUserData = (init) => {
  const [list, setList] = useState(init);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    if (null === lastUpdate) {
      return;
    }
    axios.get(URL, { withCredentials: true }).then((res) => {
      setList(res.data);
    });
  }, [lastUpdate]);

  return [list, setLastUpdate];
};
