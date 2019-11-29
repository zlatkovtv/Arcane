import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

// TODO CHANGE
const userId = 1;

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
	
	newTodo: string;
	todos: string[];

	constructor(private commonService: CommonService) { }

	ngOnInit() {
		this.getTodos();
	}

	getTodos() {
		this.commonService.getTodos(userId).subscribe(
			todos => {
				this.todos = todos.map(todo => {
					return todo.description;
				});
			},
			error => {
				console.log(error);
			}
		);
	}

	createTodo() {
		this.commonService.saveTodo(userId, this.newTodo).subscribe(
			res => {
				this.todos.unshift(this.newTodo);
				this.newTodo = '';
			},
			error => {
				console.log(error);
			}
		);
	}

	completeTodo(index) {
		this.commonService.completeTodo(userId, this.todos[index]).subscribe(
			res => {
				this.todos.splice(index, 1);
			},
			error => {
				console.log(error);
			}
		);
	}
}
