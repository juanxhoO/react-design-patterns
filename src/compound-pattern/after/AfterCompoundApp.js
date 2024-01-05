import {TransactionCard} from './TransactionCard';

function AfterCompundApp() {
    return (
        <div className="App">
            <TransactionCard>
                <TransactionCard.Title>
                    Compra Maestro Depratti

                </TransactionCard.Title>
                <TransactionCard.Image src="dsd" />
                <TransactionCard.Amount>55.4</TransactionCard.Amount>

                <TransactionCard.Description>

                    Compra Blusa Beige Verano Moda

                </TransactionCard.Description>

            </TransactionCard>
        </div>
    );
}

export default AfterCompundApp;
