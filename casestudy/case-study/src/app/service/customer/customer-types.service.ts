import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../../model/customer/customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypesService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<CustomerType[]>{
    return this.http.get<CustomerType[]>('http://localhost:3000/customerTypes');
  }
}
