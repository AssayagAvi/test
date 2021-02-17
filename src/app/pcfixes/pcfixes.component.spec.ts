import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcfixesComponent } from './pcfixes.component';

describe('PcfixesComponent', () => {
  let component: PcfixesComponent;
  let fixture: ComponentFixture<PcfixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcfixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcfixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
