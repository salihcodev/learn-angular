import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.sass',
})
export class AccordionComponent implements OnInit {
  @Input() items: {
    title: string;
    content: string;
  }[] = [];

  currIndex = 0;

  constructor() {}

  trackIndex(idx: number) {
    idx === this.currIndex ? (this.currIndex = -1) : (this.currIndex = idx);
  }

  ngOnInit(): void {}
}
