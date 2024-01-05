import TransactionCardImage from './TransactionCardImage';
import TransactionCardAmount from './TransactionCardAmount';
import TransactionCardTitle from './TransactionCardTitle';
import TransactionCardDescription from './TransactionCardDescription';
import { useState, createContext } from 'react';

const CardContext = createContext();

function TransactionCard({ children }) {
  const [isSelected, setSelected] = useState(false);
  return (


    <CardContext.Provider value={{ isSelected }}>
      <div
        onClick={() => setSelected((curr) => !curr)}

        className={`transaction-card ${isSelected ? "selected" : ""}`}
      >
        {children}
      </div>
    </CardContext.Provider>

  );
}

TransactionCard.Title = TransactionCardTitle
TransactionCard.Image = TransactionCardImage
TransactionCard.Amount = TransactionCardAmount
TransactionCard.Description = TransactionCardDescription

export {TransactionCard,CardContext}
