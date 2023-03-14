import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./component/customer/customer-link/customer-link.module').then(module => module.CustomerLinkModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./component/contract/contract-link/contract-link.module').then(module => module.ContractLinkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
