import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   API_URL = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL)
      .pipe(
        map((response: any) => response),
      );
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(this.API_URL + '/categories', category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/categories/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.API_URL}/categories/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.API_URL}/categories/${id}`);

  }
}
