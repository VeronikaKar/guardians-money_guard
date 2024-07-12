import { useSelector } from "react-redux";
// import s from "./Balance.module.css";
const Balance = () => {
  const totalBalance = useSelector((state) => state.finance.totalBalance);

  return (
    <div>
      <h1>Your Balance</h1>
      <p>{totalBalance}</p>
    </div>
  );
};

export default Balance;
