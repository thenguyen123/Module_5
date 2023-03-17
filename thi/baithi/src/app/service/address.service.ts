import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../model/address';
import {Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private  http: HttpClient) { }
  getAllAddress(): Observable<Address[]> {
    return  this.http.get<Address[]>('http://localhost:8080/address');
  }
}
