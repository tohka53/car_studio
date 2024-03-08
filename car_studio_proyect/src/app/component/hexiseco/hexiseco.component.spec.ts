import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexisecoComponent } from './hexiseco.component';

describe('HexisecoComponent', () => {
  let component: HexisecoComponent;
  let fixture: ComponentFixture<HexisecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexisecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HexisecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
