import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import Theme from './Components/Theme';
import TodoTable from './Components/TodoTable';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(response => {
        setTodos(response.data.todos);
      })
      .catch(error => {
        console.error('Error fetching the todos:', error);
      });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const filteredTodos = todos.filter(todo =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen p-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="flex justify-between items-center mb-4">
        <SearchBar
         searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Theme theme={theme} toggleTheme={toggleTheme} />
      </div>
      <TodoTable
       todos={filteredTodos} />
    </div>
  );
};

export default App;
