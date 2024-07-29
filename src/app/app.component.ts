import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { FetchingService } from './fetching.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SearchBarComponent, ResultsListComponent],
})
export class AppComponent {
  results: any = [];
  isLoading = false;

  constructor(private fetching: FetchingService) {}

  onTerm(term: string) {
    if (typeof term === `string`) {
      this.isLoading = true;

      this.fetching.search(term).subscribe((data) => {
        this.isLoading = false;
        return (this.results = data);
      });
    }
  }
}
