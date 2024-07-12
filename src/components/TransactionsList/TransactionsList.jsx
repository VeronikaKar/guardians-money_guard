import { useState } from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
// import { selectTransactions } from "../../redux/transactions/selectors";
import s from "./TransactionsList.module.css";

const toSorted = (transactions) => {
  return [...transactions].sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });
};

// const TransactionsList = () => {
//   const transactions = useSelector(selectTransactions);

//   if (!transactions.length) {
//     return (
//       <div className={s.filler}>
//         <p>You don’t have any transactions now...</p>
//       </div>
//     );
//   }

const TransactionsList = ({ transactions }) => {
  const [isMobile] = useState(false);

  if (!transactions.length) {
    return (
      <div className={s.filler}>
        <p>You don’t have any transactions now...</p>
      </div>
    );
  }

  const sortedTransactions = toSorted(transactions);

  return (
    <>
      {!isMobile ? (
        <div className={s.wrapper}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th className={s.type}>Type</th>
                <th>Category</th>
                <th>Comment</th>
                <th className={s.sum}>Sum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((transaction) => (
                <TransactionsItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ul className={s.mobileList}>
          {sortedTransactions.map((transaction) => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
};
TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      transactionDate: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["INCOME", "EXPENSE"]).isRequired,
      categoryId: PropTypes.string.isRequired,
      comment: PropTypes.string,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default TransactionsList;
