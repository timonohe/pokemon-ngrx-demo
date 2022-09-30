import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachtedPokemonInfoComponent } from './cachted-pokemon-info.component';

describe('CachtedPokemonInfoComponent', () => {
  let component: CachtedPokemonInfoComponent;
  let fixture: ComponentFixture<CachtedPokemonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachtedPokemonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CachtedPokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
