import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from 'projects/cft-md-feedback-form/src/form/form.component';
import { ProductsComponent } from 'projects/cft-md-feedback-form/products/products.component';
import { AppComponent } from './app.component';
import { ThanksComponent } from './thanks/thanks.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
  {
    path:"product" , component: ProductsComponent
  },
  {
    path:"form", component: FormComponent
  },
  {
    path:"thanks", component: ThanksComponent
  },
  {
      path: '**',
      component: FormComponent,
      pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
