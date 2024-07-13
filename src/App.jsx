import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";

// import { monoThunk } from "./redux/currency/operations";

// import { categoriesThunk } from "./redux/categories/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(monoThunk());
    // dispatch(categoriesThunk());
  }, [dispatch]);
  return (
    <>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis atque
        amet repellat esse quae nulla expedita! Aspernatur sunt aliquid
        molestias veritatis illo numquam quo voluptatum velit exercitationem?
        Minus, ducimus aut?
      </p>
      <HomePage />
    </>
  );
}

export default App;
