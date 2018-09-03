import { NgModule } from '@angular/core';
import { AdministrationComponent } from './administration.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'administration', component: AdministrationComponent}
    ]),
    SharedModule
  ],
  declarations: [AdministrationComponent],
  exports: []
})
export class AdministrationModule { }
