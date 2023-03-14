import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  category: Category[];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
findAllCategory() {
   this.categoryService.getAll().subscribe(param => {
    this.category = param;
  });
}

  constructor(private  productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  this.findAllCategory();
  }

  submit() {
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value).subscribe(() => {
      alert('thành công');
    });
  }

}
