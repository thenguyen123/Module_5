import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productEditForm: FormGroup;
  id: number;
  category: Category[];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
              private rout: Router, private categoryService: CategoryService) {


  }

  ngOnInit(): void {
    this.findAllCategory();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'), 10);
    });
    this.productService.findById(this.id).subscribe(param => {
      this.product = param;
      this.productEditForm = new FormGroup({
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
        category: new FormControl(this.product.category.name)

      });
    });
    console.log(this.product);
  }

  findAllCategory() {
    this.categoryService.getAll().subscribe(param => {
      this.category = param;
    });
  }

  submit() {
    this.productService.editProduct(this.id, this.productEditForm.value).subscribe(() => {
      alert('Thành công');
    });
    this.rout.navigateByUrl('product/list');
  }
}
