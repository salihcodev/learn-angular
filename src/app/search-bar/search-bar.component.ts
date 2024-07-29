import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  term = ``;

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.search.emit(this.term);
  }
}
