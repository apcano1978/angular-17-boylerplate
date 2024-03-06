import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IntranetComponent } from './intranet.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetPageComponent } from './containers/intranet-page/intranet-page.component';

@NgModule({
  imports: [
    SharedModule,
    IntranetRoutingModule // Important this is the last imported module
  ],
  declarations: [
    IntranetComponent,
    IntranetPageComponent
  ],
  exports: [],
  providers: []
})

export class IntranetModule {
  constructor() {}
}
