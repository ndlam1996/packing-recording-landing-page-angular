import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent, Product } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';
import { SupportContactComponent } from '../support-contact/support-contact.component';

@Component({
  selector: 'app-san-pham',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SupportContactComponent],
  templateUrl: './san-pham.component.html',
  styleUrl: './san-pham.component.scss'
})
export class SanPhamComponent {
  hideHeader: boolean = false;
  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.hideHeader = params.has('hideHeader');
    });
  }
  products: Product[] = [
    {
      id: 1,
      name: 'COMBO Phần Mềm Quay Video Đóng Hàng Theo Mã Vận Đơn + Webcam 2K + Giá đỡ kèm LED',
      image: 'assets/image/products/combo-webcam-giado-phanmem.png',
      realPrice: 699000,
      fakePrice: 1165000,
      soldCount: 1247,
      rating: 5,
      shopeeLink: 'https://shopee.vn/product/123456'
    },
    {
      id: 2,
      name: 'COMBO WEBCAM 2K FHD + GIÁ ĐỠ Cao 1m7 Kèm Đèn LED Vòng 20cm',
      image: 'assets/image/products/combo-webcam-phanmem.png',
      realPrice: 349000,
      fakePrice: 699000,
      soldCount: 856,
      rating: 5,
      shopeeLink: 'https://shopee.vn/product/234567'
    },
    {
      id: 3,
      name: 'Webcam 2K 2560x1440 – Tự động lấy nét – Xoay 360° – Tích hợp micro khử ồn',
      image: 'assets/image/products/webcam.png',
      realPrice: 329000,
      fakePrice: 545000,
      soldCount: 432,
      rating: 4,
      shopeeLink: 'https://shopee.vn/product/345678'
    },
    {
      id: 4,
      name: 'Giá Đỡ Điện Thoại, Webcam Cao 1m7 Kèm Đèn LED Vòng 20cm',
      image: 'assets/image/products/webcam.png',
      realPrice: 799000,
      fakePrice: 1599000,
      soldCount: 432,
      rating: 4,
      shopeeLink: 'https://shopee.vn/product/345678'
    },
    {
      id: 5,
      name: 'Phần Mềm Quay Video Đóng Hàng 6 tháng',
      image: 'assets/image/video-recording.png',
      realPrice: 474000,
      fakePrice: 594000,
      soldCount: 632,
      rating: 5,
      shopeeLink: 'https://shopee.vn/product/345678'
    },
    {
      id: 6,
      name: 'Phần Mềm Quay Video Đóng Hàng 12 tháng',
      image: 'assets/image/video-recording.png',
      realPrice: 590000,
      fakePrice: 1188000,
      soldCount: 432,
      rating: 5,
      shopeeLink: 'https://shopee.vn/product/345678'
    }
  ];

  showContactPopup = false;
  selectedProduct: Product | null = null;

  openContactPopup(product?: Product) {
    this.selectedProduct = product || null;
    this.showContactPopup = true;
  }

  closeContactPopup() {
    this.showContactPopup = false;
    this.selectedProduct = null;
  }
}
