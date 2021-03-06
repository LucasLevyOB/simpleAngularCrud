import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme: boolean;

  constructor() {
    this.theme = false;
  }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    if (!this.theme) {
      document.documentElement.style.setProperty('--color-1', '#00BFFF');
      document.documentElement.style.setProperty('--color-3', '#FF8200');
    } else {
      document.documentElement.style.setProperty('--color-1', '#FF8200');
      document.documentElement.style.setProperty('--color-3', '#00BFFF');
    }
  }

}
