import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegensComponent } from './legens.component';

describe('LegensComponent', () => {
  let component: LegensComponent;
  let fixture: ComponentFixture<LegensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
