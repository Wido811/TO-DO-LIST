import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeardBarComponent } from './heard-bar.component';

describe('HeardBarComponent', () => {
  let component: HeardBarComponent;
  let fixture: ComponentFixture<HeardBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeardBarComponent]
    });
    fixture = TestBed.createComponent(HeardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
