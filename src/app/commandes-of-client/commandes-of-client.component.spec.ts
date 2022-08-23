import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesOfClientComponent } from './commandes-of-client.component';

describe('CommandesOfClientComponent', () => {
  let component: CommandesOfClientComponent;
  let fixture: ComponentFixture<CommandesOfClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesOfClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesOfClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
