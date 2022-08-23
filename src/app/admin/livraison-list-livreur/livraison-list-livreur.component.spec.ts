import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonListLivreurComponent } from './livraison-list-livreur.component';

describe('LivraisonListLivreurComponent', () => {
  let component: LivraisonListLivreurComponent;
  let fixture: ComponentFixture<LivraisonListLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonListLivreurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonListLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
