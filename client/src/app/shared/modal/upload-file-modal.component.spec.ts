import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileModalComponent } from './upload-file-modal.component';

describe('ModalComponent', () => {
  let component: UploadFileModalComponent;
  let fixture: ComponentFixture<UploadFileModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UploadFileModalComponent]
    });
    fixture = TestBed.createComponent(UploadFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
