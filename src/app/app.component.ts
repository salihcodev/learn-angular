import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  list = [
    {
      title: 'The #1',
      desc: 'lorem test the test #1',
      img: 'https://placehold.co/600x400',
    },
    {
      title: 'The #2',
      desc: 'lorem test the test #2',
      img: 'https://placehold.co/600x400',
    },
    {
      title: 'The #3',
      desc: 'lorem test the test #3',
      img: 'https://placehold.co/600x400',
    },
    {
      title: 'The #4',
      desc: 'lorem test the test #4',
      img: 'https://placehold.co/600x400',
    },
    {
      title: 'The #5',
      desc: 'lorem test the test #5',
      img: 'https://placehold.co/600x400',
    },
  ];
}
