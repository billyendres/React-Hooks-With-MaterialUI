import React, { useContext } from "react";
import useInputState from "../hooks/useInputState";
import { TodosContext } from "../context/todos.context";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const EditToDoForm = ({ id, task, toggleEditForm }) => {
	const [value, handleChange, reset] = useInputState(task);
	const { editTodo } = useContext(TodosContext);
	return (
		<Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
			<form
				onSubmit={evt => {
					evt.preventDefault();
					editTodo(id, value);
					reset();
					toggleEditForm();
				}}
			>
				<TextField
					autoFocus
					value={value}
					onChange={handleChange}
					margin="normal"
					label="Edit Task"
				/>
			</form>
		</Paper>
	);
};

export default EditToDoForm;
