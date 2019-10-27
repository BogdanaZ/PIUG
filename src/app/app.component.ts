import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';
import {debounce} from 'rxjs/operators';
import {fromEvent, interval} from 'rxjs';
import { Router } from '@angular/router';
import {routesUrl} from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'PIUG';
  navbarOpen = false;
  constructor(private router: Router) {}

  ngOnInit() {
    const scroll = fromEvent(window, 'wheel');
    const result = scroll.pipe(debounce(() => interval(500)));
    result.subscribe(x => {

      if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
        const currentPath = this.router.url;
        const index = routesUrl.indexOf(currentPath);
        if (index > -1) {
          this.router.navigate([
            (index + 1 < routesUrl.length ? routesUrl[index + 1] : routesUrl[0])
          ]);
          window.scrollTo(0, 0);
        }
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
