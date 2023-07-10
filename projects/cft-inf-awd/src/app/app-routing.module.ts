import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { AppComponent } from './app.component';
import { NextComponent } from './next/next.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:"", component: AppComponent
  },
  {
    path:"sample", component:SampleComponent
  },
  {
    path: "next", component:NextComponent
  },
  {
    path: "list", component:ListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
