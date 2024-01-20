import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {
  darkClassName = 'theme-dark';
  lightClassName = 'theme-light';
  bodyClassList = document.body.classList;

  constructor(private overlayContainer: OverlayContainer) {}

  toggleDarkTheme() {
    if (this.bodyClassList.contains(this.darkClassName)) {
      this.bodyClassList.remove(this.darkClassName);
      this.bodyClassList.add(this.lightClassName);
      this.overlayContainer.getContainerElement().classList.remove(this.darkClassName);
    } else {
      this.bodyClassList.remove(this.lightClassName);
      this.bodyClassList.add(this.darkClassName);
      this.overlayContainer.getContainerElement().classList.add(this.darkClassName);
    }
  }
  

}
