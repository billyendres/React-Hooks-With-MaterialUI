import React from "react";
import useInputState from "../hooks/useInputState";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const EditToDoForm = ({ editTodo, id, task, toggleEditForm }) => {
	const [value, handleChange, reset] = useInputState(task);
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
					value={value}
					onChange={handleChange}
					margin="normal"
					label="Edit Task"
					fullWidth
				/>
			</form>
		</Paper>
	);
};

export default EditToDoForm;
