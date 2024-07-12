import { useState } from "react";
import { Icon } from "../../images/Icon/Icon";
import PropTypes from "prop-types";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
};

const TransactionsItem = ({ transaction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories] = useState([]);

  const [categoryName, setCategoryName] = useState("Unknown");


  const findAndSetCategoryName = (categoryId) => {
    const foundCategory = categories.find((item) => item.id === categoryId);
    if (foundCategory) {
      setCategoryName(foundCategory.name);
    } else {
      setCategoryName("Unknown");
    }
  };
  findAndSetCategoryName(transaction);

  const openModal = () => {
    setIsModalOpen(true);
  };

    const closeModal = () => {
      setIsModalOpen(false);
    };

  const handleDelete = () => {
    console.log("Deleting transaction:", transaction.id);
  };

  return (
    <>
      <div className="transaction-item">
        <p>{formatDate(transaction.transactionDate)}</p>
        <p>{transaction.type === "INCOME" ? "+" : "-"}</p>
        <p>{categoryName}</p>
        <p>{transaction.comment}</p>
        <p>{Math.abs(transaction.amount)}</p>
        <div className="actions">
          <button onClick={openModal}>
            <Icon id="icon-pen" height={14} width={14} />
          </button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
       {isModalOpen && (
        <EditTransactionForm
          transaction={transaction}
          closeModal={closeModal}
          categories={categories}
        />
      )}
    </>
  );
};
TransactionsItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    transactionDate: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    comment: PropTypes.string,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
export default TransactionsItem;
