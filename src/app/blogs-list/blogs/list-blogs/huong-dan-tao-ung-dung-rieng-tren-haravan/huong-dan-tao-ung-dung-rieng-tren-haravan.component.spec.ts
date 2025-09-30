import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongDanTaoUngDungRiengTrenHaravanComponent } from './huong-dan-tao-ung-dung-rieng-tren-haravan.component';

describe('HuongDanTaoUngDungRiengTrenHaravanComponent', () => {
    let component: HuongDanTaoUngDungRiengTrenHaravanComponent;
    let fixture: ComponentFixture<HuongDanTaoUngDungRiengTrenHaravanComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HuongDanTaoUngDungRiengTrenHaravanComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HuongDanTaoUngDungRiengTrenHaravanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
