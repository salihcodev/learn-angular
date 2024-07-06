import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsWrapperComponent } from './mods-wrapper/mods-wrapper.component';

const routes: Routes = [{ path: ``, component: ModsWrapperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModRoutingModule {}
