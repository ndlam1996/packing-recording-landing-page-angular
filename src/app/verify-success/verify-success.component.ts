import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verify-success',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './verify-success.component.html',
  styleUrl: './verify-success.component.scss',
})
export class VerifySuccessComponent {

  downloadWindows() {
    // open new tab with link https://1drv.ms/f/c/611a49d55e97a855/Eqbt-xQAkKxImfRJeRv4TFQBT2DKXpHhNnm8XP7mlrCFCA?e=P0PJW1
    window.open('https://1drv.ms/f/c/611a49d55e97a855/EsvCGe7ixoFKrN4SmmUWpicB6uEdN-y5L5Ckt9T6NaWeqw?e=SWHsD2', '_blank');
  }
}
