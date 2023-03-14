import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  findById(id: number): Observable<Todo> {

    return this.http.get<Todo>('http://localhost:3000/todos/'+id);
  }

  delete(id): Observable<Todo> {
    debugger
    return this.http.delete<Todo>('http://localhost:3000/todos/'+id)
  }

  save(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos/', todo)
  }
  update(id:number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>('http://localhost:3000/todos/'+id, todo)
  }
}
