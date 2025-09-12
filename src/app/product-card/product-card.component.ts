import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() buyNow = new EventEmitter<Product>();

  onBuyNow(): void {
    this.buyNow.emit(this.product);
  }

  onGoToShopee(): void {
    window.open(this.product.shopeeLink, '_blank');
  }
}