export default function ListTodoComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth,
    today.getDay()
  );
  const todos = [
    { id: 1, description: 'learn java', done: false, targetDate: targetDate },
    { id: 2, description: 'learn fullStack', targetDate: targetDate },
  ];
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
