import { Component } from "@angular/core";
import { throwError, of, forkJoin, combineLatest, BehaviorSubject } from "rxjs";
import { catchError, tap, map, switchMap, filter, first } from "rxjs/operators";

import { UserService } from "./users/user.service";
import { TodoService } from "./todos/todo.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // All of the users
  users$ = this.userService.users$;

  // TODOs for the user
  todos$ = this.todoService.todosForUser$;

  // Currently selected user
  selectedUserId: number;

  constructor(
    private userService: UserService,
    private todoService: TodoService
  ) {}

  onSelected(userId: number): void {
    this.selectedUserId = userId;
    this.userService.selectedUserChanged(userId);
  }
}
