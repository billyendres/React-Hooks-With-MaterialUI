import React, { Fragment, useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "../context/todos.context";

const ToDoList = () => {
	const { todos } = useContext(TodosContext);
	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, i) => (
						<Fragment>
							<Todo
								id={todo.id}
								task={todo.task}
								key={todo.id}
								completed={todo.completed}
							/>
							{i < todos.length - 1 && <Divider />}
						</Fragment>
					))}
				</List>
			</Paper>
		);
	return null;
};

export default ToDoList;
