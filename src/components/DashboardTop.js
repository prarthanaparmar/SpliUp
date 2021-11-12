import classes from "./DashboardTop.module.css";

const DashboardTop = (props) => {
  return (
    <div>
      <div className={classes.top}>
        <h1>Dashboard</h1>
        <button>Add an expense</button>
        <button>Settle Up</button>
      </div>
      <div className={classes.summary}>
        <div className={classes.summary_item}>
          <h3>Total Balance</h3>
          <div>{props.totalBalance}</div>
        </div>
        <div className={classes.summary_item}>
          <h3>You Owe</h3>
          <div>{props.youOwe}</div>
        </div>
        <div className={classes.summary_item}>
          <h3>You Are Owed</h3>
          <div>{props.youAreOwed}</div>
        </div>
      </div>
    </div>
  );
};
export default DashboardTop;
