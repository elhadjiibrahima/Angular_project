import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabZoneComponent } from './tab-zone.component';

describe('TabZoneComponent', () => {
  let component: TabZoneComponent;
  let fixture: ComponentFixture<TabZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
