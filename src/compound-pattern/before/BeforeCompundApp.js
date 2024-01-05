import TransactionCard  from './TransactionCard';

function BeforeCompundApp() {
  return (
    <div className="App">
      <TransactionCard
        title="Compra Maestro Depratti"
        image="dsd"
        amount={55.4}
        description="Compra Blusa Beige Verano Moda"
      />
    </div>
  );
}

export default BeforeCompundApp;
