import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { ToDo } from './todo.service';

@Component({
  selector: 'appTodo1',
  templateUrl: './todo1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Todo1Component  {
  @Input() todos$: Observable<ToDo[]>;
}
