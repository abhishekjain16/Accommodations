import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDriverListComponent } from './manager-driver-list.component';

describe('ManagerDriverListComponent', () => {
  let component: ManagerDriverListComponent;
  let fixture: ComponentFixture<ManagerDriverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDriverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDriverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
