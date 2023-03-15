import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>('http://localhost:3000/facilities');
}
delete(id): Observable<Facility>{
    return this.http.delete<Facility>('http://localhost:3000/facilities/' + id );
}

}
