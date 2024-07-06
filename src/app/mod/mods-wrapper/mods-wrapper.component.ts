import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mods-wrapper',
  standalone: true,
  templateUrl: './mods-wrapper.component.html',
  styleUrl: './mods-wrapper.component.sass',
  imports: [SharedModule, CommonModule],
})
export class ModsWrapperComponent implements OnInit {
  modalStatus = false;
  items = [
    { title: `The title`, content: `the content right.` },
    { title: `The title`, content: `the content right.` },
    { title: `The title`, content: `the content right.` },
    { title: `The title`, content: `the content right.` },
  ];
  constructor() {}

  ngOnInit() {}

  toggleModalVisibility() {
    this.modalStatus = !this.modalStatus;
  }
}
