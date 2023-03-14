import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  mess: string;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private  route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      this.productService.findById(id).subscribe(param => {
        this.product = param;
      });
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      alert('thành công');
      this.route.navigateByUrl('/product/list');
    });
  }
}
