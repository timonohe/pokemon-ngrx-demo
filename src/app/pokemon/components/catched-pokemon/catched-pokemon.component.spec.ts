import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchedPokemonComponent } from './catched-pokemon.component';

describe('CatchedPokemonComponent', () => {
  let component: CatchedPokemonComponent;
  let fixture: ComponentFixture<CatchedPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchedPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
