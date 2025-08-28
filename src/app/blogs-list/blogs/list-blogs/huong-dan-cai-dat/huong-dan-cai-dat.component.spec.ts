import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongDanCaiDatComponent } from './huong-dan-cai-dat.component';

describe('HuongDanCaiDatComponent', () => {
  let component: HuongDanCaiDatComponent;
  let fixture: ComponentFixture<HuongDanCaiDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuongDanCaiDatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuongDanCaiDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
