import classes from "./Expense.module.css";

const Expense = (props) => {
  let amount = "";
  if (props.amount < 0)
    amount = `you owe CAD${Math.abs(props.amount).toFixed(2)}`;
  else if (props.amount > 0)
    amount = `you are owed CAD${props.amount.toFixed(2)}`;
  return (
    <li className={classes.expense}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.amount}>{amount}</div>
      </div>
    </li>
  );
};
export default Expense;
