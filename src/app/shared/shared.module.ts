import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DividerComponent,
    TabsComponent,
    TableComponent,
    ModalComponent,
    AccordionComponent,
  ],
  exports: [
    DividerComponent,
    TableComponent,
    TabsComponent,
    ModalComponent,
    AccordionComponent,
  ],
})
export class SharedModule {}
