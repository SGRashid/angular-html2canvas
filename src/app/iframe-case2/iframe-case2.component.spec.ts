import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeCase2Component } from './iframe-case2.component';

describe('IframeCase2Component', () => {
  let component: IframeCase2Component;
  let fixture: ComponentFixture<IframeCase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeCase2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeCase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
