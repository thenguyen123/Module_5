import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cartype} from '../model/cartype';

@Injectable({
  providedIn: 'root'
})
export class CartypeService {

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<Cartype[]> {
    return this.http.get<Cartype[]>('http://localhost:8080/cartypes');
  }
}
