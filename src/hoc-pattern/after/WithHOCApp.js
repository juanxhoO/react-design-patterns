import React, { useState } from 'react';

// HOC para la lógica de autenticación
const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    const authenticate = () => {
      // Lógica de autenticación (puede ser más compleja en un caso real)
      setAuthenticated(true);
    };

    return (
      <div>
        {!authenticated && (
          <div>
            <button onClick={authenticate}>Iniciar Sesión</button>
          </div>
        )}
        {authenticated && <WrappedComponent {...props} />}
      </div>
    );
  };
};

// Componente de Saldo
const BalanceComponent = ({ balance }) => {
  return (
    <div>
      <h2>Saldo de la cuenta:</h2>
      <p>{`$${balance}`}</p>
    </div>
  );
};

// Componente de Transacción envuelto con el HOC de autenticación
const TransactionComponent = ({ amount, onTransaction }) => {
  return (
    <div>
      <h2>Realizar Transacción:</h2>
      <p>{`Monto: $${amount}`}</p>
      <button onClick={onTransaction}>Realizar Transacción</button>
    </div>
  );
};

// Uso del HOC para envolver el componente de transacción
const AuthenticatedTransaction = withAuthentication(TransactionComponent);

// App principal
const BankAppHOC = () => {
  return (
    <div>
      <BalanceComponent balance={1000} />
      <AuthenticatedTransaction amount={50} onTransaction={() => console.log('Transacción realizada')} />
    </div>
  );
};

export default BankAppHOC;
