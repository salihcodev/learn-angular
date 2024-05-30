import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  randomtext = faker.lorem.sentence();
  entredText = ``;

  onInput(value: Event) {
    this.entredText = (value?.target as HTMLInputElement).value;
  }

  afterCompare(currLetter: string, randLetter: string) {
    if (!randLetter) {
      return `pending`;
    }

    return currLetter === randLetter ? `correct` : `wrong`;
  }
}
