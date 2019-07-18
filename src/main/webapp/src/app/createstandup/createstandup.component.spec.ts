import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestandupComponent } from './createstandup.component';

describe('CreatestandupComponent', () => {
  let component: CreatestandupComponent;
  let fixture: ComponentFixture<CreatestandupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestandupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestandupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
