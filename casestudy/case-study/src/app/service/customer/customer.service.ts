import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private  http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer/api/customer');
  }

  save(customer: Customer): Observable<Customer> {
    return this.http.post('http://localhost:3000/customers', customer);
  }

  update(customer: Customer, id: number): Observable<Customer> {
    return this.http.put<Customer>('http://localhost:3000/customers/' + id, customer);
  }

  findById(id): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:3000/customers/' + id);
  }

  delete(id): Observable<Customer> {
    return this.http.delete('http://localhost:3000/customers/' + id);
  }
}
