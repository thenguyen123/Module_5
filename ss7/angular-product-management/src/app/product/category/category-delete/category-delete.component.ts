import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;
  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {

  }
  getCategory(id: number) {

    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm = new FormGroup({
        name: new FormControl(category.name),
      });
    });
  }
  deleteCategory(id: any) {
this.categoryService.deleteCategory(this.id).subscribe(() => {
  this.router.navigate(['/category/list']);
}, e => {
  console.log(e);
});
  }
}
