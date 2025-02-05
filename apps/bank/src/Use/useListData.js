import { useEffect, useState } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_URL + "/bank/api/accounts";

export const useListData = (init) => {
  const [list, setList] = useState(init);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    if (null === lastUpdate) {
      return;
    }
    axios.get(URL).then((res) => {
      setList(res.data);
    });
  }, [lastUpdate]);

  return [list, setLastUpdate];
};
