import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconePrincipalComponent } from './icone-principal.component';

describe('IconePrincipalComponent', () => {
  let component: IconePrincipalComponent;
  let fixture: ComponentFixture<IconePrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconePrincipalComponent]
    });
    fixture = TestBed.createComponent(IconePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
