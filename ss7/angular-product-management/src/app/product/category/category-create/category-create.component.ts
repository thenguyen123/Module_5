import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private route: Router) {
  }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    });
  }

  submit() {
this.categoryService.saveCategory(this.categoryForm.value).subscribe(() =>{
  this.categoryForm.reset();
  alert('Tạo thành công');
}, e => {
  console.log(e);
  }
  );

  }
}
