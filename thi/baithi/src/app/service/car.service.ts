import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/car';
import {Content} from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<{ content: Car[] }> {
    return this.http.get<{ content: Car[] }>('http://localhost:8080/api/car');
  }

  delete(id: string): Observable<Car> {
    return this.http.delete<Car>('http://localhost:8080/api/car/delete/' + id);
  }

  findById(id: string): Observable<Car> {
    return this.http.get <Car>('http://localhost:8080/api/car/find/' + id);
  }

  save(car: Car): Observable<Car> {
    return this.http.post<Car>('http://localhost:8080/api/car/create', car);
  }

  edit(id: string, car: Car): Observable<Car> {
    return this.http.put<Car>('http://localhost:8080/api/car/update' , car);
  }
}
