import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiscsComponent } from './my-discs.component';

describe('MyDiscsComponent', () => {
  let component: MyDiscsComponent;
  let fixture: ComponentFixture<MyDiscsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiscsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
