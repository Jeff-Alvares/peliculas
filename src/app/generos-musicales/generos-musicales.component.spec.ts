import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosMusicalesComponent } from './generos-musicales.component';

describe('GenerosMusicalesComponent', () => {
  let component: GenerosMusicalesComponent;
  let fixture: ComponentFixture<GenerosMusicalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosMusicalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosMusicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
