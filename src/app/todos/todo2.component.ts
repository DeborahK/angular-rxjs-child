import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Observable } from "rxjs";

import { ToDo } from "./todo.service";

@Component({
  selector: "appTodo2",
  templateUrl: "./todo2.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Todo2Component {
  @Input() todos: ToDo[];
}
