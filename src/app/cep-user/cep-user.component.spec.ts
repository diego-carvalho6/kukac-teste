import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepUserComponent } from './cep-user.component';

describe('CepUserComponent', () => {
  let component: CepUserComponent;
  let fixture: ComponentFixture<CepUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
