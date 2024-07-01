import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.sass',
})
export class DividerComponent implements OnInit {
  @Input() title = ``;

  ngOnInit(): void {}
}
