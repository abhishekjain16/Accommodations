import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemNewComponent } from './menu-item-new.component';

describe('MenuItemNewComponent', () => {
  let component: MenuItemNewComponent;
  let fixture: ComponentFixture<MenuItemNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
