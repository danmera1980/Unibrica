import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputHarness } from '@angular/material/input/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let loader: HarnessLoader;
  let store: MockStore;
  const initialState = {
    token: null,
    error: null,
    isLoading: false,
    user: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        NoopAnimationsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({initialState})
      ]
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a username and password field', async () => {
    const usernameField = await loader.getHarness<MatFormFieldHarness>(MatFormFieldHarness.with({
      selector: '#user-form-field'
    }))
    const passwordField = await loader.getHarness(MatFormFieldHarness.with({
      selector: '#password-form-field'
    }))
    expect(usernameField).toBeTruthy();
    expect(passwordField).toBeTruthy();
  })

  it('shouldn\'t let you submit form if username field is empty', async () => {
    const usernameField = await loader.getHarness<MatFormFieldHarness>(MatFormFieldHarness.with({
      selector: '#user-form-field'
    }));
    const userInput = await loader.getHarness<MatInputHarness>(MatInputHarness.with({
      ancestor:'#user-form-field'
    }));
    const formButton = await loader.getHarness<MatButtonHarness>(MatButtonHarness);
    
    spyOn(component, 'submit')
    await formButton.click();
    fixture.detectChanges();

    expect(await userInput.getValue()).toBeFalsy();
    expect(await usernameField.isControlValid()).toBeFalse();
    expect(await formButton.isDisabled()).toBeTrue();
    expect(component.submit).toHaveBeenCalledTimes(0);
  })

  it('shouldn\'t let you submit form if password field is empty', async () => {
    const passwordField = await loader.getHarness<MatFormFieldHarness>(MatFormFieldHarness.with({
      selector: '#password-form-field'
    }));
    const passwordInput = await loader.getHarness<MatInputHarness>(MatInputHarness.with({
      ancestor:'#password-form-field'
    }));
    const formButton = await loader.getHarness<MatButtonHarness>(MatButtonHarness);
    
    spyOn(component, 'submit')
    await formButton.click();
    fixture.detectChanges();
    
    expect(await passwordInput.getValue()).toBeFalsy();
    expect(await passwordField.isControlValid()).toBeFalse();
    expect(await formButton.isDisabled()).toBeTrue();
    expect(component.submit).toHaveBeenCalledTimes(0);
  })

  it('should submit valid values on button click', async () => {
    const userInput = await loader.getHarness<MatInputHarness>(MatInputHarness.with({
      ancestor:'#user-form-field'
    }));
    const passwordInput = await loader.getHarness<MatInputHarness>(MatInputHarness.with({
      ancestor:'#password-form-field'
    }));
    const formButton = await loader.getHarness<MatButtonHarness>(MatButtonHarness);
    spyOn(component, 'submit');

    await userInput.setValue('testUser');
    await passwordInput.setValue('testPassword');
    await formButton.click();
  
    expect(component.submit).toHaveBeenCalledTimes(1);
  })

  


});