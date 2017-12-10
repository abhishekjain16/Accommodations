import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurant.ListComponent } from './restaurant.list.component';

describe('Restaurant.ListComponent', () => {
  let component: Restaurant.ListComponent;
  let fixture: ComponentFixture<Restaurant.ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Restaurant.ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurant.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
