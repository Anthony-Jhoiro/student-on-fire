import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireComponent } from './commentaire.component';

describe('CommentaireComponent', () => {
  let component: CommentaireComponent;
  let fixture: ComponentFixture<CommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
