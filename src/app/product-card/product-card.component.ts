import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  image: string;
  realPrice: number;
  fakePrice: number;
  soldCount: number;
  rating: number;
  shopeeLink: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  Math = Math; // Expose Math object to template

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }

  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i < this.product.rating ? 1 : 0);
  }

  onBuyNow(): void {
    // Logic mua ngay
    console.log('Mua ngay sản phẩm:', this.product.name);
  }

  onGoToShopee(): void {
    window.open(this.product.shopeeLink, '_blank');
  }
}