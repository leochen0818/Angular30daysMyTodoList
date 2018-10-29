import { Component, OnInit } from '@angular/core';

// Service
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  /**
   * 新增代辦事項
   *
   * @param {HTMLInputElement} inputRef - 輸入框的元素實體
   * @memberof TodoListComponent
   */
  addTodo(inputRef: HTMLInputElement): void {

    const todo = inputRef.value.trim();

    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }

  }

  /**
   * 取得待辦事項清單
   *
   * @returns {string[]}
   * @memberof TodoListComponent
   */
  getList(): string[] {
    return this.todoListService.getList();
  }

}
