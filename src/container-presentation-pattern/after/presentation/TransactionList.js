
function TransactionList(props) {
    return (
        <div>
            {props.todos.map((todo) => {
                <div key={todo.id}>{todo.title}</div>
            })}
        </div>
    );
}

export default TransactionList;
