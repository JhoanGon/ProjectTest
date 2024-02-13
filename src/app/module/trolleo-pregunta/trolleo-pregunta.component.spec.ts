import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleoPreguntaComponent } from './trolleo-pregunta.component';

describe('TrolleoPreguntaComponent', () => {
  let component: TrolleoPreguntaComponent;
  let fixture: ComponentFixture<TrolleoPreguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrolleoPreguntaComponent]
    });
    fixture = TestBed.createComponent(TrolleoPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
