import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() desc = '';
  @Input() img = '';

  constructor() {}

  ngOnInit() {}
}
