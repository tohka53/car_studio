import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuntekecoComponent } from './suntekeco.component';

describe('SuntekecoComponent', () => {
  let component: SuntekecoComponent;
  let fixture: ComponentFixture<SuntekecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuntekecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuntekecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
