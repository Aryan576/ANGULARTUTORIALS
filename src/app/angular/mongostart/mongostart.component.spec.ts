import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongostartComponent } from './mongostart.component';

describe('MongostartComponent', () => {
  let component: MongostartComponent;
  let fixture: ComponentFixture<MongostartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongostartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongostartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
