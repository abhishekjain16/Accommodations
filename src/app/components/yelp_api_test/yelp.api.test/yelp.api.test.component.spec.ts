import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yelp.Api.TestComponent } from './yelp.api.test.component';

describe('Yelp.Api.TestComponent', () => {
  let component: Yelp.Api.TestComponent;
  let fixture: ComponentFixture<Yelp.Api.TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yelp.Api.TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yelp.Api.TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
