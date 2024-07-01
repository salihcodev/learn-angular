import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cols',
  standalone: true,
  templateUrl: './cols.component.html',
  styleUrl: './cols.component.sass',
  imports: [SharedModule, RouterModule],
})
export class ColsComponent {
  rows = [
    {
      name: 'John Lilki',
      registrationDate: 'September 14, 2013',
      emailAddress: 'jhlilk22@yahoo.com',
      premiumPlan: 'No',
    },
    {
      name: 'Jamie Harington',
      registrationDate: 'January 11, 2014',
      emailAddress: 'jamieharingonton@yahoo.com',
      premiumPlan: 'Yes',
    },
    {
      name: 'Jill Lewis',
      registrationDate: 'May 11, 2014',
      emailAddress: 'jilsewris22@yahoo.com',
      premiumPlan: 'Yes',
    },
  ];

  props = [
    { key: `name`, label: `Name` },
    { key: `registrationDate`, label: `Registration Date` },
    { key: `emailAddress`, label: `E-mail address` },
    { key: `premiumPlan`, label: `Premium Plan` },
  ];
}
