import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicacion-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
export class ApplicationInfoComponent {
  info: string;
  constructor() {
    this.info = 'mi primer componente';
  }
}

