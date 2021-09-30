import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosPeliculasComponent } from './generos-peliculas.component';

describe('GenerosPeliculasComponent', () => {
  let component: GenerosPeliculasComponent;
  let fixture: ComponentFixture<GenerosPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
