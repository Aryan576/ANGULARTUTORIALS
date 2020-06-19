import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIPromptsComponent } from './cliprompts.component';

describe('CLIPromptsComponent', () => {
  let component: CLIPromptsComponent;
  let fixture: ComponentFixture<CLIPromptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLIPromptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLIPromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
