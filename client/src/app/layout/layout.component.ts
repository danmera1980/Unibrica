import { Component } from '@angular/core';
import { Scroll, NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { sidebarMock } from './components/sidebar/mocks/sidebar-item.mock';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidebarItems = sidebarMock;
  isMenuOpen = false;
  currentRoute!: string;
  routerEvents$!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerEvents$ = this.router.events.subscribe((event: any) => {
      if (event instanceof Scroll) {
        this.currentRoute = event.routerEvent.url;
      } else if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEvents$.unsubscribe();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
