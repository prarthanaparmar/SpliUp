import React, { useState } from "react";

import DashboardTop from "../components/DashboardTop";
import Expenses from "../components/Expenses";

const DashboardPage = () => {
  //   console.log("inside dashboard");
  const [totalBalance, setTotalBalance] = useState(0.0);
  const [youOwe, setYouOwe] = useState(0.0);
  const [youAreOwed, setYouAreOwed] = useState(0.0);

  const totalBalanceHandler = () => {
    // fetch total balance from dynamo
    // setTotalBalance()
  };

  const youOweHandler = () => {};

  const youAreOwedHandler = () => {};

  return (
    <>
      <DashboardTop
        totalBalance={totalBalance}
        youOwe={youOwe}
        youAreOwed={youAreOwed}
      />
      <Expenses />
    </>
  );
};
export default DashboardPage;
