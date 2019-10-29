import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { throwError, forkJoin } from "rxjs";
import { filter, switchMap, tap, shareReplay } from "rxjs/operators";

import { UserService } from "../users/user.service";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todoUrl = "https://jsonplaceholder.typicode.com/todos";

  // Watches for changes to the selected user
  // Emits an item and reexecutes the pipeline every time a different user is selected
  // As part of the pipeline, it retrieves the todos for the user using the emitted userId as an argument
  todosForUser$ = this.userService.userSelectedAction$.pipe(
    // Handle the case of no selection
    filter(userId => Boolean(userId)),
    switchMap(userId =>
      this.http.get<ToDo[]>(`${this.todoUrl}?userId=${userId}&completed=true`)
    ),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private userService: UserService) {}
}

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
