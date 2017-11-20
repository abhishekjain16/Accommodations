import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverOrderListComponent } from './driver-order-list.component';

describe('DriverOrderListComponent', () => {
  let component: DriverOrderListComponent;
  let fixture: ComponentFixture<DriverOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
