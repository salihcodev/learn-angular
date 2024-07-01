import { Component, Input, OnInit } from '@angular/core';
import { IteratorDirective } from '../../iterator.directive';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [IteratorDirective],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.sass',
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;

  ngOnInit(): void {}
}
