import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceFormComponent } from './annonce-form.component';

describe('AnnonceFormComponent', () => {
  let component: AnnonceFormComponent;
  let fixture: ComponentFixture<AnnonceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
