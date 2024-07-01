import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, DividerComponent, TabsComponent, TableComponent],
  exports: [DividerComponent, TableComponent, TabsComponent],
})
export class SharedModule {}
