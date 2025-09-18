import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongDanKetNoiDroidcamComponent } from './huong-dan-ket-noi-droidcam.component';

describe('HuongDanKetNoiDroidcamComponent', () => {
    let component: HuongDanKetNoiDroidcamComponent;
    let fixture: ComponentFixture<HuongDanKetNoiDroidcamComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HuongDanKetNoiDroidcamComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HuongDanKetNoiDroidcamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});