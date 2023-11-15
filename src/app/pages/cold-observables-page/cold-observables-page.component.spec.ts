import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObservablesPageComponent } from './cold-observables-page.component';

describe('ColdObservablesPageComponent', () => {
  let component: ColdObservablesPageComponent;
  let fixture: ComponentFixture<ColdObservablesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdObservablesPageComponent]
    });
    fixture = TestBed.createComponent(ColdObservablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
