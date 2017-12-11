import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemEditComponent } from './menuitem-edit.component';

describe('MenuitemEditComponent', () => {
  let component: MenuitemEditComponent;
  let fixture: ComponentFixture<MenuitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
