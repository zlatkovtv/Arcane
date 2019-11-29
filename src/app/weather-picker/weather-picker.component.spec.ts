import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPickerComponent } from './weather-picker.component';

describe('WeatherPickerComponent', () => {
  let component: WeatherPickerComponent;
  let fixture: ComponentFixture<WeatherPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
