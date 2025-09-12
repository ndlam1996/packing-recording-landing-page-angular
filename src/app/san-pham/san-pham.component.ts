import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent, Product } from '../product-card/product-card.component';

@Component({
  selector: 'app-san-pham',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './san-pham.component.html',
  styleUrl: './san-pham.component.scss'
})
export class SanPhamComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'CAM CHECK - Phần mềm Quay Video Đóng Hàng Professional',
      image: 'assets/image/dashboard.png',
      realPrice: 299000,
      fakePrice: 599000,
      soldCount: 1247,
      rating: 5,
      shopeeLink: 'https://shopee.vn/product/123456'
    },
    {
      id: 2,
      name: 'CAM CHECK - Gói Premium 1 năm',
      image: 'assets/image/video-recording.png',
      realPrice: 599000,
      fakePrice: 1299000,
      soldCount: 856,
      rating: 5,
      shopeeLink: 'https://shopee.vn/product/234567'
    },
    {
      id: 3,
      name: 'CAM CHECK - Combo phần mềm + Camera HD',
      image: 'assets/image/video-list.png',
      realPrice: 799000,
      fakePrice: 1599000,
      soldCount: 432,
      rating: 4,
      shopeeLink: 'https://shopee.vn/product/345678'
    }
  ];
}
