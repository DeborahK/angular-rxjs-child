import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, throwError, forkJoin } from "rxjs";
import { catchError, filter, switchMap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userUrl = "https://jsonplaceholder.typicode.com/users";

  // Action stream (one parameter)
  private userSelectedSubject = new BehaviorSubject<number>(0);
  userSelectedAction$ = this.userSelectedSubject.asObservable();

  // All Users
  users$ = this.http.get<User[]>(this.userUrl)
  .pipe(
    // tap(data => console.log('users', JSON.stringify(data))),
    catchError(err => throwError("Error occurred"))
  );

  constructor(private http: HttpClient) {}

  selectedUserChanged(userId: number): void {
    this.userSelectedSubject.next(userId);
  }
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}
