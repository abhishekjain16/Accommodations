import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerChefListComponent } from './manager-chef-list.component';

describe('ManagerChefListComponent', () => {
  let component: ManagerChefListComponent;
  let fixture: ComponentFixture<ManagerChefListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerChefListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerChefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
