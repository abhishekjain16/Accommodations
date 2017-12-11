import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerDetailComponent } from './admin-manager-detail.component';

describe('AdminManagerDetailComponent', () => {
  let component: AdminManagerDetailComponent;
  let fixture: ComponentFixture<AdminManagerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
