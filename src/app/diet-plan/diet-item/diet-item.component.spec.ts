import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietItemComponent } from './diet-item.component';

describe('DietItemComponent', () => {
  let component: DietItemComponent;
  let fixture: ComponentFixture<DietItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
