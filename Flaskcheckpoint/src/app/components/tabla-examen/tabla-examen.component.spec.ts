import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaExamenComponent } from './tabla-examen.component';

describe('TablaExamenComponent', () => {
  let component: TablaExamenComponent;
  let fixture: ComponentFixture<TablaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
