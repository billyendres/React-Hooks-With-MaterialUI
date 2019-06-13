import React, { useContext } from "react";
import useToggleState from "../hooks/useToggleState";
import EditToDoForm from "./EditToDoForm";
import { TodosContext } from "../context/todos.context";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todo = ({ task, completed, id }) => {
	const [isEditing, toggle] = useToggleState(false);
	const { removeTodo, toggleTodo } = useContext(TodosContext);
	return (
		<div>
			<ListItem>
				{isEditing ? (
					<EditToDoForm id={id} task={task} toggleEditForm={toggle} />
				) : (
					<>
						<Checkbox
							tabIndex={-1}
							checked={completed}
							onClick={() => toggleTodo(id)}
						/>
						<ListItemText
							style={{ textDecoration: completed ? "line-through" : "none" }}
						>
							{task}
						</ListItemText>
						<ListItemSecondaryAction>
							<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
								<DeleteIcon />
							</IconButton>
							<IconButton aria-label="Edit" onClick={toggle}>
								<EditIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</>
				)}
			</ListItem>
		</div>
	);
};

export default Todo;
