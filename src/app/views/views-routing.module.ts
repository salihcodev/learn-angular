import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsCompWrapperComponent } from './views-comp-wrapper/views-comp-wrapper.component';

const routes: Routes = [{ path: ``, component: ViewsCompWrapperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
