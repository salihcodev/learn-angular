import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.css',
})
export class ResultsListComponent implements OnInit {
  @Input() list = [];
  @Input() isLoading = false;

  ngOnInit(): void {}
}
