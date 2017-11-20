import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpApiDetailComponent } from './yelp.api.detail.component';

describe('Yelp.Api.DetailComponent', () => {
  let component: YelpApiDetailComponent;
  let fixture: ComponentFixture<YelpApiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpApiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpApiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
