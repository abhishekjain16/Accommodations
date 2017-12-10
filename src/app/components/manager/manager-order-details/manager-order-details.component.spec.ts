import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOrderDetailsComponent } from './manager-order-details.component';

describe('ManagerOrderDetailsComponent', () => {
  let component: ManagerOrderDetailsComponent;
  let fixture: ComponentFixture<ManagerOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
