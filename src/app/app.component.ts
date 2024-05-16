import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  minPswLength = 8;
  maxPswLength = 20;
  password = '';

  pswConfigs = {
    includeLetters: false,
    includeNumbers: false,
    includeSymbols: false,
    length: 0,
  };

  handleToggle(type: any) {
    switch (type) {
      case `includeLetters`:
        this.pswConfigs.includeLetters = !this.pswConfigs[`includeLetters`];
        break;
      case `includeNumbers`:
        this.pswConfigs.includeNumbers = !this.pswConfigs[`includeNumbers`];
        break;
      case `includeSymbols`:
        this.pswConfigs.includeSymbols = !this.pswConfigs[`includeSymbols`];
        break;

      default:
        break;
    }
  }

  setLength(e: Event) {
    const length = (event?.target as HTMLInputElement)?.value;

    this.pswConfigs.length = Number(length);
  }

  onBtnClick() {
    const configSets = {
      L: 'abcdefghijklmnopqrstvuwxyz',
      N: '0123456789',
      S: '~!@#$%^&*()',
    };

    let wholePswSet: string = ``;
    if (this.pswConfigs.includeLetters) {
      wholePswSet += configSets.L;
    }

    if (this.pswConfigs.includeNumbers) {
      wholePswSet += configSets.N;
    }

    if (this.pswConfigs.includeSymbols) {
      wholePswSet += configSets.S;
    }

    if (wholePswSet.length !== 0) {
      let newPsw: string = ``;
      for (let i = 0; i < this.pswConfigs.length; i++) {
        const randIdx: number = Math.floor(Math.random() * wholePswSet.length);

        newPsw += wholePswSet[randIdx];
      }

      this.password = newPsw;
    } else {
      alert(
        `Please choose at least one criteria i.e <letters>, <symbols>, <numbers>`
      );
    }
  }
}
