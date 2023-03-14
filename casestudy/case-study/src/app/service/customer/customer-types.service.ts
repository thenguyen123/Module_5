import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerTypes} from '../../model/customer/customer.types';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypesService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<CustomerTypes[]>{
    return this.http.get<CustomerTypes[]>('http://localhost:3000/customerTypes');
  }
}
