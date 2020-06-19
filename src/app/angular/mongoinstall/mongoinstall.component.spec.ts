import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoinstallComponent } from './mongoinstall.component';

describe('MongoinstallComponent', () => {
  let component: MongoinstallComponent;
  let fixture: ComponentFixture<MongoinstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoinstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoinstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
