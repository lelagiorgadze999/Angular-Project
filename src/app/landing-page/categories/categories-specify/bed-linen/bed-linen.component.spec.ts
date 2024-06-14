import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedLinenComponent } from './bed-linen.component';

describe('BedLinenComponent', () => {
  let component: BedLinenComponent;
  let fixture: ComponentFixture<BedLinenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BedLinenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedLinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
