import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
	newTodo: string;
	todos: string[];

	constructor() { }

	ngOnInit() {
		this.todos = [];
		// api get todos
	}

	createTodo() {
		console.log(this.newTodo);
		this.todos.push(this.newTodo);
		this.newTodo = '';
		// save to DB
	}

	completeTodo(index) {
		if (index > -1) {
			this.todos.splice(index, 1);
		}
	}
}
