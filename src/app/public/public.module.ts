import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './containers/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    PublicRoutingModule // Important this is the last imported module
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [],
  providers: []
})

export class PublicModule {
  constructor() {}
}
