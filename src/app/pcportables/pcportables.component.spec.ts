import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcportablesComponent } from './pcportables.component';

describe('PcportablesComponent', () => {
  let component: PcportablesComponent;
  let fixture: ComponentFixture<PcportablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcportablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcportablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
