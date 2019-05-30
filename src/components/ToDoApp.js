import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const ToDoApp = () => {
	const initialTodos = [
		{ id: 1, task: "task 1", completed: false },
		{ id: 2, task: "task 2", completed: true },
		{ id: 2, task: "task 3", completed: false }
	];

	const [todos, setTodos] = useState(initialTodos);
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
		</Paper>
	);
};

export default ToDoApp;
