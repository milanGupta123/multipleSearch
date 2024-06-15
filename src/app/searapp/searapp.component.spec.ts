import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearappComponent } from './searapp.component';

describe('SearappComponent', () => {
  let component: SearappComponent;
  let fixture: ComponentFixture<SearappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
