import Modal from "./UI/Modal";

const AddExpense = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h2>Add Expenses here...</h2>
      <form>
        <input type="text" placeholder="Enter name or email address" />
        <input type="text" placeholder="Enter a Description" />
        <input type="number" placeholder="0.0" />
        <button>Add</button>
      </form>
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};
export default AddExpense;
