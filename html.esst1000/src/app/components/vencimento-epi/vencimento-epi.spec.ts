import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencimentoEpi } from './vencimento-epi';

describe('VencimentoEpi', () => {
  let component: VencimentoEpi;
  let fixture: ComponentFixture<VencimentoEpi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VencimentoEpi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VencimentoEpi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
