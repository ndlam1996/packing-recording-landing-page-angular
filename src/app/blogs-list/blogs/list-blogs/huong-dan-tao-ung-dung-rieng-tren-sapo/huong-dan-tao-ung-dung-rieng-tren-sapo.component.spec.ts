import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongDanTaoUngDungRiengTrenSapoComponent } from './huong-dan-tao-ung-dung-rieng-tren-sapo.component';

describe('HuongDanTaoUngDungRiengTrenSapoComponent', () => {
    let component: HuongDanTaoUngDungRiengTrenSapoComponent;
    let fixture: ComponentFixture<HuongDanTaoUngDungRiengTrenSapoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HuongDanTaoUngDungRiengTrenSapoComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HuongDanTaoUngDungRiengTrenSapoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});