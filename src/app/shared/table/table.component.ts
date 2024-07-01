import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.sass',
})
export class TableComponent implements OnInit {
  @Input(`classes`) classNames = ``;
  @Input() rows: any = [];
  @Input() props: any = [];

  ngOnInit(): void {}
}
