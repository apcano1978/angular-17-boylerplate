import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', redirectTo: 'admin-page', pathMatch: 'full'},
    { path: 'admin-page', component: AdminPageComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
