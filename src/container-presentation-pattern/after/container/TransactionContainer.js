import TransactionList from "../presentation/TransactionList";

function TransactionContainer() {
    const [todos, setTodos] = useState({});

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch();
            const data = await res.json();
            setTodos(data);
        }
        catch (e) {
            console.error(e);
        }
    });

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <TransactionList data={todos} />
    );
}

export default TransactionContainer;
