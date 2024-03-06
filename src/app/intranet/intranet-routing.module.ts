import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';
import { IntranetPageComponent } from './containers/intranet-page/intranet-page.component';

const routes: Routes = [
  { path: '', component: IntranetComponent, children: [
    { path: '', redirectTo: 'intranet-page', pathMatch: 'full'},
    { path: 'intranet-page', component: IntranetPageComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntranetRoutingModule { }
