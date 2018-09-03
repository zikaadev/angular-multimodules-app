import { NgModule } from '@angular/core';
import { ProductsDetailsComponent } from './products-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        {path: 'products-details', component: ProductsDetailsComponent}
    ]),
    SharedModule
  ],
  declarations: [ProductsDetailsComponent],
  exports: []
})
export class ProductsModule { }
