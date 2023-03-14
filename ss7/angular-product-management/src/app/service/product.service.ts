import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any;

  constructor(private http: HttpClient) {
  }


  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/product', product);
  }

  editProduct(idEdit, product): Observable<Product> {
    return this.http.put<Product>('http://localhost:3000/product/' + idEdit, product);
  }

  findById(id): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/product/' + id);
  }

  delete(id): Observable<Product> {
    return this.http.delete<Product>('http://localhost:3000/product/' + id);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(' http://localhost:3000/product');
  }

}
