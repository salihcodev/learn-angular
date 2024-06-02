import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LodashPipe } from './lodash.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  imports: [CommonModule, RouterOutlet, LodashPipe],
})
export class AppComponent {
  inputs: Record<'name' | 'date' | 'amount' | 'height', string> = {
    name: ``,
    date: ``,
    amount: ``,
    height: ``,
  };

  onInputHandle(e: Event, where: 'name' | 'date' | 'amount' | 'height') {
    const val = (e.target as HTMLInputElement).value;

    this.inputs[where] = val;
  }
}
