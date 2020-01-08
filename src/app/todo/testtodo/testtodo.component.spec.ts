import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttodoComponent } from './testtodo.component';

describe('TesttodoComponent', () => {
  let component: TesttodoComponent;
  let fixture: ComponentFixture<TesttodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
