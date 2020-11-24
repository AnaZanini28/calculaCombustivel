import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitrosComponent } from './litros.component';

describe('LitrosComponent', () => {
  let component: LitrosComponent;
  let fixture: ComponentFixture<LitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
