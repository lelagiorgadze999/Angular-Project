import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowelsComponent } from './towels.component';

describe('TowelsComponent', () => {
  let component: TowelsComponent;
  let fixture: ComponentFixture<TowelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TowelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TowelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
