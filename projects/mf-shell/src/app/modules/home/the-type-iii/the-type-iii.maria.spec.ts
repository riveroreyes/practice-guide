import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTypeIiiMaria } from './the-type-iii.maria';

describe('TheTypeIiiMaria', () => {
  let component: TheTypeIiiMaria;
  let fixture: ComponentFixture<TheTypeIiiMaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTypeIiiMaria ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheTypeIiiMaria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
