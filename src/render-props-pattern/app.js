import React, { useState } from 'react';

// Componente padre funcional que utiliza el patrón Render Props
const RenderPropsParent = ({ render }) => {
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const incrementarContador = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Renderiza el componente hijo y pasa la función y el estado como propiedades
  return (
    <div>
      <h2>Render Props Parent</h2>
      <p>Contador: {count}</p>
      {/* Utiliza la prop "render" para renderizar el componente hijo */}
      {render(count, incrementarContador)}
    </div>
  );
};

// Componente hijo funcional que recibe la función y el estado como props y los utiliza
const RenderPropsChild = ({ count, incrementar }) => {
  return (
    <div>
      <h3>Render Props Child</h3>
      <p>Contador en el hijo: {count}</p>
      <button onClick={incrementar}>Incrementar desde el hijo</button>
    </div>
  );
};

// Uso del patrón Render Props con programación funcional
const RenderPropsApp = () => {
  return (
    <div>
      {/* El componente RenderPropsParent utiliza el componente RenderPropsChild como hijo,
      y pasa una función y el estado del contador como props */}
      <RenderPropsParent render={(count, incrementar) => <RenderPropsChild count={count} incrementar={incrementar} />} />
    </div>
  );
};

export default RenderPropsApp;
