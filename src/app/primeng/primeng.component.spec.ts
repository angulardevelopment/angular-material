import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengComponent } from './primeng.component';

describe('PrimengComponent', () => {
  let component: PrimengComponent;
  let fixture: ComponentFixture<PrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
