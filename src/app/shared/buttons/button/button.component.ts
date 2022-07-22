import { Component, Input, OnInit } from '@angular/core';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType = 'button';

  constructor() {}

  ngOnInit() {}
}
