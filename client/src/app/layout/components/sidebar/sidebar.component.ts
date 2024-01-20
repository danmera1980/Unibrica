import { Component, OnDestroy, OnInit } from '@angular/core';
import { sidebarMock } from './mocks/sidebar-item.mock';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
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
