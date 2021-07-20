import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyBackComponent } from './money-back.component';

describe('MoneyBackComponent', () => {
  let component: MoneyBackComponent;
  let fixture: ComponentFixture<MoneyBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
