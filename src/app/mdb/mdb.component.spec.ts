import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbComponent } from './mdb.component';

describe('MdbComponent', () => {
  let component: MdbComponent;
  let fixture: ComponentFixture<MdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
