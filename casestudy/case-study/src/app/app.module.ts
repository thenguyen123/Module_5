import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FacilityComponent } from './component/facility/facility/facility.component';
import { CustomerComponent } from './component/customer/customer/customer.component';
import { ContractComponent } from './component/contract/contract/contract.component';
import { ContractEditComponent } from './component/contract/contract-edit/contract-edit.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
    ContractEditComponent,
    ContractCreateComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
