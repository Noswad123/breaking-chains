import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscDetailComponent } from './disc-detail.component';

describe('DiscDetailComponent', () => {
  let component: DiscDetailComponent;
  let fixture: ComponentFixture<DiscDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
