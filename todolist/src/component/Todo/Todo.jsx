import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
	const { text, status } = todo;
	const handleChange = (e) => {
		console.log(e.target.checked);
		const status = e.target.checked ? 'completed' : 'active';
		onUpdate({ ...todo, status });
	};
	const handleDelete = () => onDelete(todo);
	return (
		<li>
			<input type="checkbox" id="checkbox" checked={status === 'completed'} onChange={handleChange} />
			<label htmlFor="checkbox">{text}</label>
			<button onClick={handleDelete}>
				<FaRegTrashAlt></FaRegTrashAlt>
			</button>
		</li>
	);
}
