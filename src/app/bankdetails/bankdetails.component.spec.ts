import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailsComponent } from './bankdetails.component';

describe('BankdetailsComponent', () => {
  let component: BankdetailsComponent;
  let fixture: ComponentFixture<BankdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankdetailsComponent]
    });
    fixture = TestBed.createComponent(BankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
