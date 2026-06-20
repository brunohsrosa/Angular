import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaSolicitacao } from './nova-solicitacao';

describe('NovaSolicitacao', () => {
  let component: NovaSolicitacao;
  let fixture: ComponentFixture<NovaSolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovaSolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaSolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
