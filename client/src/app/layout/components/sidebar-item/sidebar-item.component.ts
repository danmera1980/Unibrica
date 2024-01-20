import { Component, Input, OnInit } from '@angular/core';
import { SidebarItem } from './models/sidebar-item.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input() sidebarItem!: SidebarItem;
  @Input() activatedRoute!: string;
  isClicked = false;

  get isActivated(): boolean {
    return this.activatedRoute === this.sidebarItem.route;
  }

  constructor (private router: Router) {}
  
  handleClick() {
    if (!this.isActivated) {
      this.router.navigate([this.sidebarItem.route])
    }
  }
}
