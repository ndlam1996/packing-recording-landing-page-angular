import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CAM CHECK - Ứng Dụng Quay Video Đóng Hàng';
  hideHeader: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.hideHeader = params.has('hideHeader');
    });
  }
}

