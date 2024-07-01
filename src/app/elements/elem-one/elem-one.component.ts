import { Component } from '@angular/core';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { SharedModule } from '../../shared/shared.module';
import { ElemTwoComponent } from '../elem-two/elem-two.component';

@Component({
  selector: 'app-elem-one',
  standalone: true,
  imports: [PlaceholderComponent, ElemTwoComponent, SharedModule],
  templateUrl: './elem-one.component.html',
  styleUrl: './elem-one.component.sass',
})
export class ElemOneComponent {}
