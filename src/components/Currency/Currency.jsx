import { useEffect, useState } from "react";

import fetchCurrency from "../../service/MonobankApi.js";
import Loader from "../../components/Loader/Loader";

// import s from "./Currency.module.css";

const Currency = () => {
  const [currency, setCurrency] = useState(
    () => JSON.parse(localStorage.getItem("currency")) || null
  );
  const [loading, setLoading] = useState(!currency);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrency();
        setCurrency(data);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <p>Currency</p>
        <p>Purchase</p>
        <p>Sale</p>
      </div>
      <div>
        <div>
          <p>USD</p>
          <p>{currency.usd.toFixed(2)}</p>
          <p>{currency.usd.toFixed(2)}</p>
        </div>
        <div>
          <p>EUR</p>
          <p>{currency.eur.toFixed(2)}</p>
          <p>{currency.eur.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Currency;
