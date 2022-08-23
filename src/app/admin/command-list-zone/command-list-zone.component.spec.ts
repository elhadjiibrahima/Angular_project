import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandListZoneComponent } from './command-list-zone.component';

describe('CommandListZoneComponent', () => {
  let component: CommandListZoneComponent;
  let fixture: ComponentFixture<CommandListZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandListZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandListZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
