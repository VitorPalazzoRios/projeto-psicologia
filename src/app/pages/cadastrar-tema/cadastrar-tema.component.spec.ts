import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTemaComponent } from './cadastrar-tema.component';

describe('CadastrarTemaComponent', () => {
  let component: CadastrarTemaComponent;
  let fixture: ComponentFixture<CadastrarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarTemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
