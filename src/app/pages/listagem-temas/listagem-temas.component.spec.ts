import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTemasComponent } from './listagem-temas.component';

describe('ListagemTemasComponent', () => {
  let component: ListagemTemasComponent;
  let fixture: ComponentFixture<ListagemTemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemTemasComponent]
    });
    fixture = TestBed.createComponent(ListagemTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
