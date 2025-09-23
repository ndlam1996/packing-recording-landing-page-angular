import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './shared/seo.service';

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
  isMenuOpen: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private seo: SeoService) {
    this.route.queryParamMap.subscribe(params => {
      this.hideHeader = params.has('hideHeader');
    });

    // Update SEO on navigation based on route data
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const data = this.getDeepestChild(this.route).snapshot.data as any;
        this.seo.update({
          title: data?.title,
          description: data?.description,
          path: data?.path,
          image: data?.image,
          imageAlt: data?.imageAlt
        });
      });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    let r: ActivatedRoute = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

