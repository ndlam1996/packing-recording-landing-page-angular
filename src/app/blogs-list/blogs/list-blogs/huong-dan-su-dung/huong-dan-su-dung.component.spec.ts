import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongDanSuDungComponent } from './huong-dan-su-dung.component';

describe('HuongDanSuDungComponent', () => {
  let component: HuongDanSuDungComponent;
  let fixture: ComponentFixture<HuongDanSuDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuongDanSuDungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuongDanSuDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
