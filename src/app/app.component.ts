import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PIUG';
  navbarOpen = false;
  logo = this.getLogo();

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  getLogo() {
    const location = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return location ? '../assets/logo.png' : 'assets/logo.png';
  }
}
