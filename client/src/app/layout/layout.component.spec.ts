import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { HeaderComponentMock } from './mocks/header.mock';
import { SidebarComponentMock } from './mocks/sidebar.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { LAYOUT_ROUTES } from './layout.routing.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponentMock, SidebarComponentMock],
      imports: [RouterTestingModule.withRoutes(LAYOUT_ROUTES)]
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
