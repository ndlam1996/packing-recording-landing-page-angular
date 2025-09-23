
import { Routes } from '@angular/router';
import { VerifySuccessComponent } from './verify-success/verify-success.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogsComponent } from './blogs-list/blogs/blogs.component';
import { HuongDanCaiDatComponent } from './blogs-list/blogs/list-blogs/huong-dan-cai-dat/huong-dan-cai-dat.component';
import { HuongDanSuDungComponent } from './blogs-list/blogs/list-blogs/huong-dan-su-dung/huong-dan-su-dung.component';
import { HuongDanKetNoiDroidcamComponent } from './blogs-list/blogs/list-blogs/huong-dan-ket-noi-droidcam/huong-dan-ket-noi-droidcam.component';
import { SanPhamComponent } from './san-pham/san-pham.component';

export const routes: Routes = [
  {
    path: '', component: LandingPageComponent, data: {
      title: 'CAM CHECK - Quay video đóng đơn tự động | Bảo vệ người bán',
      description: 'Quay video đóng đơn tự động theo mã vận đơn, tra cứu nhanh, giảm khiếu nại >90%. Dùng miễn phí trên web.',
      path: '/'
    }
  },
  {
    path: 'san-pham', component: SanPhamComponent, data: {
      title: 'Sản phẩm CAM CHECK - Phần mềm quay video đóng đơn',
      description: 'Giải pháp quay video đóng gói theo mã vận đơn, tạo chứng cứ rõ ràng khi khiếu nại. Bảng giá minh bạch.',
      path: '/san-pham'
    }
  },
  {
    path: 'blogs', component: BlogsComponent, data: {
      title: 'Hướng dẫn CAM CHECK - Quay video đóng đơn',
      description: 'Tổng hợp hướng dẫn cài đặt và sử dụng CAM CHECK chi tiết, thực tế.',
      path: '/blogs'
    }
  },
  {
    path: 'blogs/huong-dan-cai-dat', component: HuongDanCaiDatComponent, data: {
      title: 'Hướng dẫn cài đặt CAM CHECK',
      description: 'Cách cài đặt CAM CHECK nhanh chóng, cấu hình cơ bản.',
      path: '/blogs/huong-dan-cai-dat'
    }
  },
  {
    path: 'blogs/huong-dan-su-dung', component: HuongDanSuDungComponent, data: {
      title: 'Hướng dẫn sử dụng CAM CHECK',
      description: 'Cách quay video đóng đơn, tra cứu theo mã vận đơn hiệu quả.',
      path: '/blogs/huong-dan-su-dung'
    }
  },
  {
    path: 'blogs/huong-dan-ket-noi-droidcam', component: HuongDanKetNoiDroidcamComponent, data: {
      title: 'Hướng dẫn kết nối DroidCam làm webcam',
      description: 'Biến điện thoại thành webcam cho máy tính bằng DroidCam: WiFi/USB, tối ưu chất lượng.',
      path: '/blogs/huong-dan-ket-noi-droidcam'
    }
  },
  {
    path: 'verify-success', component: VerifySuccessComponent, data: {
      title: 'Xác minh thành công - CAM CHECK',
      description: 'Thanh toán/đăng ký xác minh thành công.',
      path: '/verify-success'
    }
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
