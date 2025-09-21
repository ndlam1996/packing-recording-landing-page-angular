import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  downloadWindows() {
    // open new tab with link https://1drv.ms/f/c/611a49d55e97a855/Eqbt-xQAkKxImfRJeRv4TFQBT2DKXpHhNnm8XP7mlrCFCA?e=P0PJW1
    window.open('https://drive.google.com/drive/folders/1hKfDjNDWWv3nJbUT2e-n4a3W6snJNcpO?usp=sharing', '_blank');
  }

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
