import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerectiveComponent } from './derective.component';

describe('DerectiveComponent', () => {
  let component: DerectiveComponent;
  let fixture: ComponentFixture<DerectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
