import React, { useCallback, useEffect, useState } from "react";
import AddExpense from "../components/AddExpense";

import DashboardTop from "../components/DashboardTop";
import Expenses from "../components/Expenses";

const DashboardPage = () => {
  //   console.log("inside dashboard");
  const [showExpenses, setShowExpenses] = useState(true);
  const [showAddExpense, setShowAddExpense] = useState(false);

  const [totalBalance, setTotalBalance] = useState(0.0);
  const [youOwe, setYouOwe] = useState(0.0);
  const [youAreOwed, setYouAreOwed] = useState(0.0);

  const totalBalanceHandler = useCallback(async () => {
    // fetch total balance from dynamo
    try {
      const response = await fetch("http://localhost:3001/friends/totalSum");
      if (!response.ok) {
        throw new Error("SOmething went wrong");
      }
      const data = await response.json();
      console.log("message received - ", data.message);
      setTotalBalance(data.message);
    } catch (error) {
      console.log("Error : ", error.message);
    }
    // setTotalBalance()
  });

  useEffect(() => {
    totalBalanceHandler();
  }, []);

  const youOweHandler = () => {};

  const youAreOwedHandler = () => {};

  return (
    <>
      <DashboardTop
        totalBalance={totalBalance}
        youOwe={youOwe}
        youAreOwed={youAreOwed}
        // showAddExpense={}
      />
      <Expenses />
      {/* {showExpenses && <Expenses />}
      {showAddExpense && <AddExpense />} */}
    </>
  );
};
export default DashboardPage;
