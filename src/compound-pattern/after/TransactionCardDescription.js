import { useContext } from "react";
import { CardContext } from "./TransactionCard";

function TransactionCardDescription({ children }) {
  const { isSelected } = useContext(CardContext)
  return isSelected ? (
    <div className="App">
      {children}
    </div>
  ) : ""
}

export default TransactionCardDescription;
