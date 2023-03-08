import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
	const [filter, setFileter] = useState(filters[0]);
	return (
		<DarkModeProvider>
			<Header filters={filters} filter={filter} onFilterChange={setFileter} />
			<TodoList filter={filter} />
		</DarkModeProvider>
	);
}

export default App;
