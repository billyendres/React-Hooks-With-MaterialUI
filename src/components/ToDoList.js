import React, { Fragment } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const ToDoList = ({ removeTodo, todos, toggleTodo, editTodo }) => {
	return (
		<Paper>
			<List>
				{todos.map(todo => (
					<Fragment>
						<Todo
							id={todo.id}
							task={todo.task}
							key={todo.id}
							completed={todo.completed}
							removeTodo={removeTodo}
							toggleTodo={toggleTodo}
							editTodo={editTodo}
						/>
						<Divider />
					</Fragment>
				))}
			</List>
		</Paper>
	);
};

export default ToDoList;
