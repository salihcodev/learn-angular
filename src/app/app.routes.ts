import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'collections',
    loadChildren: () =>
      import(`./collections/collections.module`).then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'eles',
    loadChildren: () =>
      import(`./elements/elements.module`).then((m) => m.ElementsModule),
  },
  {
    path: `views`,
    loadChildren: () =>
      import(`./views/views.module`).then((m) => m.ViewsModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
