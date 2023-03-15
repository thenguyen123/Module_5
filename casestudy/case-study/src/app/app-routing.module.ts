import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityComponent} from './component/facility/facility/facility.component';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./component/customer/customer-link/customer-link.module').then(module => module.CustomerLinkModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./component/contract/contract-link/contract-link.module').then(module => module.ContractLinkModule)
  },
  {
    path: 'facility',
    component: FacilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
