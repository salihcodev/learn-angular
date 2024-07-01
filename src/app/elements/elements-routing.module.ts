import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElemOneComponent } from './elem-one/elem-one.component';

const routes: Routes = [{ path: ``, component: ElemOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
