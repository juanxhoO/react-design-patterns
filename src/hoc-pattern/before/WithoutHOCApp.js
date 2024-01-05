import React, { useState } from 'react';


// Componente de Saldo
const BalanceComponent = ({ balance }) => {
  return (
    <div>
      <h2>Saldo de la cuenta:</h2>
      <p>{`$${balance}`}</p>
    </div>
  );
};

// Componente de Transacción envuelto con la lógica de autenticación
const TransactionComponent = ({ amount, onTransaction, isAuthenticated }) => {
  return (
    <div>
      <h2>Realizar Transacción:</h2>
      <p>{`Monto: $${amount}`}</p>
      {isAuthenticated ? (
        <button onClick={onTransaction}>Realizar Transacción</button>
      ) : (
        <p>Inicia sesión para realizar una transacción.</p>
      )}
    </div>
  );
};

// App principal
const BankAppnoHOC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      <BalanceComponent balance={1000} />
      <TransactionComponent
        amount={50}
        onTransaction={() => console.log('Transacción realizada')}
        isAuthenticated={authenticated}
      />
      {!authenticated && (
        <button onClick={() => setAuthenticated(true)}>Iniciar Sesión (para probar)</button>
      )}
    </div>
  );
};

export default BankAppnoHOC;
