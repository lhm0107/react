import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
	const { id, text, status } = todo;
	const handleChange = (e) => {
		console.log(e.target.checked);
		const status = e.target.checked ? 'completed' : 'active';
		onUpdate({ ...todo, status });
	};
	const handleDelete = () => onDelete(todo);
	return (
		<li className={styles.todo}>
			<input className={styles.checkbox} type="checkbox" id={id} checked={status === 'completed'} onChange={handleChange} />
			<label className={styles.text} htmlFor={id}>
				{text}
			</label>
			<button className={styles.button} onClick={handleDelete}>
				<FaRegTrashAlt className={styles.icon} />
			</button>
		</li>
	);
}
