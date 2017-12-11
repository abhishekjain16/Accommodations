import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemAddComponent } from './menuitem-add.component';

describe('MenuitemAddComponent', () => {
  let component: MenuitemAddComponent;
  let fixture: ComponentFixture<MenuitemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
