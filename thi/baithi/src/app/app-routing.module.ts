import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarComponent} from './car/car.component';
import {EditcarComponent} from './editcar/editcar.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {path: 'car', component: CarComponent},
  {path: 'car/delete/:id', component: CarComponent},
  {path: 'car/edit/:id', component: EditcarComponent}  ,
  {path: 'car/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
