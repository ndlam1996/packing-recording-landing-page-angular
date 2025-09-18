
import { Routes } from '@angular/router';
import { VerifySuccessComponent } from './verify-success/verify-success.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogsComponent } from './blogs-list/blogs/blogs.component';
import { HuongDanCaiDatComponent } from './blogs-list/blogs/list-blogs/huong-dan-cai-dat/huong-dan-cai-dat.component';
import { HuongDanSuDungComponent } from './blogs-list/blogs/list-blogs/huong-dan-su-dung/huong-dan-su-dung.component';
import { HuongDanKetNoiDroidcamComponent } from './blogs-list/blogs/list-blogs/huong-dan-ket-noi-droidcam/huong-dan-ket-noi-droidcam.component';
import { SanPhamComponent } from './san-pham/san-pham.component';

export const routes: Routes = [
  { path: 'verify-success', component: VerifySuccessComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/huong-dan-cai-dat', component: HuongDanCaiDatComponent },
  { path: 'blogs/huong-dan-su-dung', component: HuongDanSuDungComponent },
  { path: 'blogs/huong-dan-ket-noi-droidcam', component: HuongDanKetNoiDroidcamComponent },
  { path: 'san-pham', component: SanPhamComponent },
  { path: '', component: LandingPageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
