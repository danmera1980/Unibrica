import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDecorComponent } from './login-decor.component';

describe('LoginDecorComponent', () => {
  let component: LoginDecorComponent;
  let fixture: ComponentFixture<LoginDecorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDecorComponent]
    });
    fixture = TestBed.createComponent(LoginDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the createLetterArray function', () => {
    spyOn(component, 'createLetterArray');
    component.ngOnInit();
    expect(component.createLetterArray).toHaveBeenCalled();
    expect(component.letterArray.length).toEqual(8);
  })
});
