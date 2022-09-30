import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEncounterComponent } from './pokemon-encounter.component';

describe('PokemonEncounterComponent', () => {
  let component: PokemonEncounterComponent;
  let fixture: ComponentFixture<PokemonEncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonEncounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
