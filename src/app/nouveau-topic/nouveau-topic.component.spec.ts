import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauTopicComponent } from './nouveau-topic.component';

describe('NouveauTopicComponent', () => {
  let component: NouveauTopicComponent;
  let fixture: ComponentFixture<NouveauTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
