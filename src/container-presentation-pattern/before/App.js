
function App() {
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
    })

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>


    );
}

export default App;
