import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CushionsComponent } from './cushions.component';

describe('CushionsComponent', () => {
  let component: CushionsComponent;
  let fixture: ComponentFixture<CushionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CushionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CushionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
