import React from "react";

import Expense from "./Expense";

const Expenses = () => {
  const DUMMY_txn = [
    {
      id: "f1",
      name: "monisha",
      amount: -100,
      currency: "CAD",
    },
    {
      id: "f2",
      name: "psp",
      amount: 200,
      currency: "CAD",
    },
    {
      id: "f1",
      name: "anjali",
      amount: -100.25,
      currency: "CAD",
    },
  ];
  const expenseList = DUMMY_txn.map((expense) => (
    <Expense
      id={expense.id}
      name={expense.name}
      amount={expense.amount}
      currency={expense.currency}
    />
  ));
  return (
    <section>
      <ul>{expenseList}</ul>
    </section>
  );
};
export default Expenses;
