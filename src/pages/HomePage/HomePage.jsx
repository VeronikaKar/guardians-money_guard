// src/pages/HomePage/HomePage.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransactionsList } from "components";
import {
  fetchTransactionsThunk,
  fetchCategoriesThunk,
} from "../../redux/transactions/operations";
import { selectTransactions } from "../../redux/transactions/selectors";
import AddTransactionForm from "components/AddTransactionForm";
import ButtonAddTransaction from "components/ButtonAddTransaction";
// import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  const transactions = useSelector(selectTransactions);

  return (
    <>
      {transactions.length ? <TransactionsList /> : <AddTransactionForm />}
      <ButtonAddTransaction />
    </>
  );
};

export default HomePage;
