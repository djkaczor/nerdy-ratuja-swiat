import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoradyComponent } from './porady.component';

describe('PoradyComponent', () => {
  let component: PoradyComponent;
  let fixture: ComponentFixture<PoradyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoradyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoradyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
