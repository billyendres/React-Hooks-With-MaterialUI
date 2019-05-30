import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
// import EditToDoForm from "./EditToDoForm";
import uuid from "uuid";

const ToDoApp = () => {
	const initialTodos = [
		{ id: 1, task: "task 1", completed: false },
		{ id: 2, task: "task 2", completed: true },
		{ id: 3, task: "task 3", completed: false }
	];

	const [todos, setTodos] = useState(initialTodos);

	const addTodo = newTodo => {
		setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
	};

	const removeTodo = todoId => {
		const updatedTodos = todos.filter(todo => todo.id !== todoId);

		setTodos(updatedTodos);
	};

	const toggleTodo = todoId => {
		const updatedTodos = todos.map(todo =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map(todo =>
			todo.id === todoId ? { ...todo, task: newTask } : todo
		);
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: "100vh",
				backgroundColor: "#fafafa"
			}}
			elevation={0}
		>
			<AppBar
				color="primary"
				position="static"
				style={{
					height: "64px"
				}}
			>
				<Toolbar>
					<Typography color="inherit">Todos With Hooks</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: "1rem" }}>
				<Grid item xs={11} md={8} lg={4}>
					<ToDoForm addTodo={addTodo} />
					<ToDoList
						todos={todos}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default ToDoApp;
