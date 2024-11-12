// lib/GlobalContext.js

import React, { createContext, useContext, useState } from "react";
import moment from "moment";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    createModal: "scale-0",
    updateModal: "scale-0",
    deleteModal: "scale-0",
    backModal: "scale-0",
    connectedAccount: "",
    projects: [],
    project: null,
    stats: null,
    backers: [],
  });

  const setGlobalState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const getGlobalState = (key) => {
    return state[key];
  };

  const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
      let start = text.substring(0, startChars);
      let end = text.substring(text.length - endChars, text.length);
      while (start.length + end.length < maxLength) {
        start = start + ".";
      }
      return start + end;
    }
    return text;
  };

  const daysRemaining = (days) => {
    const todaysdate = moment();
    days = Number((days + "000").slice(0));
    days = moment(days).format("YYYY-MM-DD");
    days = moment(days);
    days = days.diff(todaysdate, "days");
    return days === 1 ? "1 day" : `${days} days`;
  };

  return (
    <GlobalContext.Provider
      value={{ state, setGlobalState, getGlobalState, truncate, daysRemaining }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
