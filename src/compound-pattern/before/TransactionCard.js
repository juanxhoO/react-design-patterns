import TransactionCardImage from './TransactionCardImage';
import TransactionCardAmount from './TransactionCardAmount';
import TransactionCardTitle from './TransactionCardTitle';
import TransactionCardDescription from './TransactionCardDescription';
import { useState } from 'react';
function TransactionCard({ title, image, amount, description }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected((curr) => !curr)}

      className={`transaction-card ${isSelected ? "selected" : ""}`}
    >
      <TransactionCardTitle>{title}</TransactionCardTitle>
      <TransactionCardImage src={image} />
      <TransactionCardAmount>{amount}</TransactionCardAmount>
      <TransactionCardDescription>{description}</TransactionCardDescription>
    </div>
  );
}
export default TransactionCard
