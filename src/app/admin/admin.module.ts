import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule // Important this is the last imported module
  ],
  declarations: [
    AdminComponent,
    AdminPageComponent
  ],
  exports: [],
  providers: []
})

export class AdminModule {
  constructor() {}
}
