import { useState } from 'react';




const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

  const newrr={id: Date.now(), text: inputValue }
    setTodos([...todos,newrr]);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(ind => ind.id !== id));
    console.log(id)
  };


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4" 
    >
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-indigo-700">
          <h1 className="text-2xl font-bold text-white">Task Master</h1>
          <p className="text-indigo-100 text-sm">Organize your day</p>
        </div>

        {/* Input Section */}
        <form onSubmit={addTodo} className="p-6 border-b border-gray-100 flex gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Add a new task..."
      
            onChange={(t) => setInputValue(t.target.value)}
          />

          <button 
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Add
          </button>
        </form>
      
        {/* Todo List */}
        <ul className="divide-y divide-gray-100">
          {todos.length === 0 ? 
            <li className="p-10 text-center text-gray-400">No tasks yet. Add one above!</li>
          : 
            todos.map((todo,ind) => (
              <li
                key={ind}
                className="group flex items-center justify-between p-4 "
              >
                <div className="flex items-center gap-3 flex-1" >
                  <span className={`text-gray-700 transition-all`}>
                    {todo.text}
                  </span>
                </div>
                <button 
                value="delete"
                  onClick={() => deleteTodo(todo.id)}
                  className=" text-black  font-bold p-2 bg-red-600 "
                > delete
                </button>
              </li>

            )
          )}
        </ul>

      </div>
    </div>
  );
};

export default TodoApp;