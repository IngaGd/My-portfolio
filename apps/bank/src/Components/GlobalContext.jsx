import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useCreateData } from "../Use/useCreateData";
import { useDeleteData } from "../Use/useDeleteData";
import { useEditData } from "../Use/useEditData";
import { useListData } from "../Use/useListData";
import { useMessages } from "../Use/useMessages";
import { useModal } from "../Use/useModal";
import axios from "axios";

const logoutURL = process.env.REACT_APP_URL + "/bank/api/logout";
const reduceBalancesURL =
  process.env.REACT_APP_URL + "/bank/api/reduceBalances";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [messages, addMessage] = useMessages([]);
  const [deleteRes, setDeleteData] = useDeleteData(null);
  const [list, setLastUpdate] = useListData(null);
  const [deleteModal, setDeleteModal, editModal, setEditModal] = useModal();
  const [createRes, setCreateData] = useCreateData(null);
  const [editRes, setEditData] = useEditData(null);

  const [route, setRoute] = useState("home");
  const [logged, setLogged] = useState(null);
  const [authName, setAuthName] = useState(null);
  const [authRole, setAuthRole] = useState(null);

  //totals:
  const [totalBalances, setTotalBalances] = useState(0);
  const [numAccounts, setNumAccounts] = useState(0);
  const [numWithImages, setNumWithImages] = useState(0);
  const [numWithDefaultImage, setNumWithDefaultImage] = useState(0);
  const [numWithZeroBalance, setNumWithZeroBalance] = useState(0);
  const [numWithPositiveBalance, setNumWithPositiveBalance] = useState(0);
  const [numWithNegativeBalance, setNumWithNegativeBalance] = useState(0);

  useEffect(() => {
    if (null === list) {
      return;
    }
    const balances = list.reduce((sum, { balance }) => sum + balance, 0);
    setTotalBalances(balances);
    setNumAccounts(list.length);

    // Count number of accounts with uploaded images
    const numWithImages = list.filter((account) => account.image).length;
    setNumWithImages(numWithImages);

    // Count number of accounts with default image
    const numWithDefaultImage = list.filter((account) => !account.image).length;
    setNumWithDefaultImage(numWithDefaultImage);

    const zeroBalanceCount = list.filter(
      (account) => account.balance === 0
    ).length;
    setNumWithZeroBalance(zeroBalanceCount);

    const positiveBalanceCount = list.filter(
      (account) => account.balance > 0
    ).length;
    setNumWithPositiveBalance(positiveBalanceCount);

    const negativeBalanceCount = list.filter(
      (account) => account.balance < 0
    ).length;
    setNumWithNegativeBalance(negativeBalanceCount);
  }, [list]);

  useEffect(() => {
    setLogged(null);
  }, [route]);

  const logOut = (_) => {
    axios.post(logoutURL, {}, { withCredentials: true }).then((res) => {
      setLogged(false);
      setAuthName(false);
      setRoute("home");
    });
  };

  useEffect(() => {
    if (deleteRes === null) {
      return;
    }
    addMessage({ text: deleteRes.message.text });
    setLastUpdate(Date.now());
  }, [deleteRes, addMessage, setLastUpdate]);

  useEffect(() => {
    if (createRes === null) {
      return;
    }
    addMessage({ text: createRes.message });
    setLastUpdate(Date.now());
  }, [createRes, addMessage, setLastUpdate]);

  useEffect(() => {
    if (editRes === null) {
      return;
    }
    addMessage({ text: editRes.message.text });
    setLastUpdate(Date.now());
  }, [editRes, addMessage, setLastUpdate]);

  const reduceBalances = async () => {
    try {
      const updatedAccounts = await axios.put(
        reduceBalancesURL,
        {},
        { withCredentials: true }
      );
      setLastUpdate(Date.now());
    } catch (error) {
      console.error(error);
    }
  };

  const handleReduceBalances = async () => {
    try {
      await axios.put(reduceBalancesURL, {}, { withCredentials: true });
      setLastUpdate(Date.now()); // Trigger a refresh of the account list
    } catch (error) {
      console.error(error);
    }
  };

  <button onClick={handleReduceBalances}>Reduce Balances</button>;

  return (
    <GlobalContext.Provider
      value={{
        messages,
        setDeleteData,
        list,
        deleteModal,
        setDeleteModal,
        editModal,
        setEditModal,
        setCreateData,
        setEditData,
        //route
        route,
        setRoute,
        //authorisation
        authName,
        setAuthName,
        logOut,
        logged,
        setLogged,
        authRole,
        setAuthRole,
        //users
        //users, setUpdateUsers, userRes, setDeleteUser,
        //totals
        totalBalances,
        setTotalBalances,
        numAccounts,
        setNumAccounts,
        numWithImages,
        setNumWithImages,
        numWithDefaultImage,
        setNumWithDefaultImage,
        numWithZeroBalance,
        numWithPositiveBalance,
        numWithNegativeBalance,
        reduceBalances,
        setLastUpdate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
