import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceDetailsComponent } from './annonce-details.component';

describe('AnnonceDetailsComponent', () => {
  let component: AnnonceDetailsComponent;
  let fixture: ComponentFixture<AnnonceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
