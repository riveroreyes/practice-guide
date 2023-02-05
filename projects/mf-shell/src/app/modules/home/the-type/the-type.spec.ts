import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheType } from './the-type';

describe('TheType', () => {
  let component: TheType;
  let fixture: ComponentFixture<TheType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheType ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
