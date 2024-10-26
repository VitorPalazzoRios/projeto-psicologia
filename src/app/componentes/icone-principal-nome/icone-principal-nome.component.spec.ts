import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconePrincipalNomeComponent } from './icone-principal-nome.component';

describe('IconePrincipalNomeComponent', () => {
  let component: IconePrincipalNomeComponent;
  let fixture: ComponentFixture<IconePrincipalNomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconePrincipalNomeComponent]
    });
    fixture = TestBed.createComponent(IconePrincipalNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
