import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleflagComponent } from './sampleflag.component';

describe('SampleflagComponent', () => {
  let component: SampleflagComponent;
  let fixture: ComponentFixture<SampleflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
