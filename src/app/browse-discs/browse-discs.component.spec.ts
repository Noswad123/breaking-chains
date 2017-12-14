import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseDiscsComponent } from './browse-discs.component';

describe('BrowseDiscsComponent', () => {
  let component: BrowseDiscsComponent;
  let fixture: ComponentFixture<BrowseDiscsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseDiscsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseDiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
