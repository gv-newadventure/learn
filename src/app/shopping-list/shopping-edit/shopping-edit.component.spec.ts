import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppintEditComponent } from './shopping-edit.component';

describe('ShoppintEditComponent', () => {
  let component: ShoppintEditComponent;
  let fixture: ComponentFixture<ShoppintEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppintEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppintEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
