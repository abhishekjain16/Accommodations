import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerListComponent } from './admin-manager-list.component';

describe('AdminManagerListComponent', () => {
  let component: AdminManagerListComponent;
  let fixture: ComponentFixture<AdminManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
