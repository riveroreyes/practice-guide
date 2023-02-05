import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTypeIiComponent } from './the-type-ii.component';

describe('TheTypeIiComponent', () => {
  let component: TheTypeIiComponent;
  let fixture: ComponentFixture<TheTypeIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTypeIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheTypeIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
