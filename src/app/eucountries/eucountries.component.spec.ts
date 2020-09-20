import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EucountriesComponent } from './eucountries.component';

describe('EucountriesComponent', () => {
  let component: EucountriesComponent;
  let fixture: ComponentFixture<EucountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EucountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EucountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
