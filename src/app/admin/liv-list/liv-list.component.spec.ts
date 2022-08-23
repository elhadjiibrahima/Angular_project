import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivListComponent } from './liv-list.component';

describe('LivListComponent', () => {
  let component: LivListComponent;
  let fixture: ComponentFixture<LivListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
