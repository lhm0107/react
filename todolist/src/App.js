import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';

const filters = ['all', 'active', 'completed'];
function App() {
	const [filter, setFileter] = useState(filters[0]);
	return (
		<div>
			<Header filters={filters} filter={filter} onFilterChange={setFileter}></Header>
			<TodoList filter={filter}></TodoList>
		</div>
	);
}

export default App;
