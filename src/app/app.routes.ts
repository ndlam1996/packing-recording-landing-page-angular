
import { Routes } from '@angular/router';
import { VerifySuccessComponent } from './verify-success/verify-success.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogsComponent } from './blogs-list/blogs/blogs.component';
import { HuongDanCaiDatComponent } from './blogs-list/blogs/list-blogs/huong-dan-cai-dat/huong-dan-cai-dat.component';
import { HuongDanSuDungComponent } from './blogs-list/blogs/list-blogs/huong-dan-su-dung/huong-dan-su-dung.component';
import { HuongDanKetNoiDroidcamComponent } from './blogs-list/blogs/list-blogs/huong-dan-ket-noi-droidcam/huong-dan-ket-noi-droidcam.component';
import { HuongDanQuayVideoDongHangShopee2026Component } from './blogs-list/blogs/list-blogs/huong-dan-quay-video-dong-hang-shopee-2026/huong-dan-quay-video-dong-hang-shopee-2026.component';
import { HuongDanTaoUngDungRiengTrenSapoComponent } from './blogs-list/blogs/list-blogs/huong-dan-tao-ung-dung-rieng-tren-sapo/huong-dan-tao-ung-dung-rieng-tren-sapo.component';
import { HuongDanTaoUngDungRiengTrenHaravanComponent } from './blogs-list/blogs/list-blogs/huong-dan-tao-ung-dung-rieng-tren-haravan/huong-dan-tao-ung-dung-rieng-tren-haravan.component';
import { SanPhamComponent } from './san-pham/san-pham.component';

const baseUrl = 'https://quayvideodongdon.com';
const ogImage = `${baseUrl}/assets/og/og-image.jpg`;
const logoImage = `${baseUrl}/assets/logo/logo.png`;

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CAM CHECK',
  url: `${baseUrl}/`,
  logo: logoImage,
  description: 'Quay video đóng đơn tự động, lưu chứng cứ rõ ràng, tra cứu nhanh.'
};

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CAM CHECK',
  url: `${baseUrl}/`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Quay video đóng đơn tự động, lưu chứng cứ rõ ràng, tra cứu nhanh.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND' }
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'CAM CHECK hoạt động như thế nào?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ứng dụng tự động quay video quá trình đóng gói theo mã vận đơn, lưu trữ và cho phép tra cứu nhanh khi cần đối chiếu.'
      }
    },
    {
      '@type': 'Question',
      name: 'CAM CHECK có miễn phí không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bạn có thể đăng ký và sử dụng miễn phí trên web. Các gói nâng cao sẽ phù hợp khi cần thêm thiết bị hoặc dịch vụ đi kèm.'
      }
    },
    {
      '@type': 'Question',
      name: 'Video được lưu trữ ở đâu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Video được lưu trữ an toàn trên đám mây và có thể truy cập mọi lúc theo mã vận đơn.'
      }
    },
    {
      '@type': 'Question',
      name: 'Có thể đồng bộ đơn hàng từ các nền tảng bán hàng không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Có. CAM CHECK hỗ trợ đồng bộ đơn hàng từ các nền tảng phổ biến như Haravan và Sapo.'
      }
    }
  ]
};

const productItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'COMBO Phần Mềm Quay Video Đóng Hàng Theo Mã Vận Đơn + Webcam 2K + Giá đỡ kèm LED',
        image: `${baseUrl}/assets/image/products/combo-webcam-giado-phanmem.png`,
        offers: {
          '@type': 'Offer',
          price: '699000',
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
          url: 'https://shopee.vn/product/96640695/40517906413/'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'COMBO WEBCAM 2K FHD + Phần Mềm Quay Video Đóng Hàng Theo Mã Vận Đơn',
        image: `${baseUrl}/assets/image/products/combo-webcam-phanmem.png`,
        offers: {
          '@type': 'Offer',
          price: '349000',
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
          url: 'https://shopee.vn/product/96640695/40517906413/'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Webcam 2K 2560x1440 – Tự động lấy nét – Xoay 360° – Tích hợp micro khử ồn',
        image: `${baseUrl}/assets/image/products/webcam.png`,
        offers: {
          '@type': 'Offer',
          price: '329000',
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
          url: 'https://shopee.vn/product/96640695/44317897525/'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'Giá Đỡ Điện Thoại, Webcam Cao 1m7 Kèm Đèn LED Vòng 20cm',
        image: `${baseUrl}/assets/image/products/Gia-do.png`,
        offers: {
          '@type': 'Offer',
          price: '799000',
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
          url: 'https://shopee.vn/product/96640695/26841221807/'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Product',
        name: 'Phần Mềm Quay Video Đóng Hàng 6 tháng',
        image: `${baseUrl}/assets/image/video-recording.png`,
        offers: {
          '@type': 'Offer',
          price: '474000',
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
          url: 'https://shopee.vn/product/96640695/41918813038/'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Product',
        name: 'Phần Mềm Quay Video Đóng Hàng 12 tháng',
        image: `${baseUrl}/assets/image/video-recording.png`,
        offers: {
          '@type': 'Offer',
          price: '590000',
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
          url: 'https://shopee.vn/product/96640695/44168804011/'
        }
      }
    }
  ]
};

const blogPostingBase = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  author: {
    '@type': 'Organization',
    name: 'CAM CHECK',
    url: `${baseUrl}/`
  },
  publisher: {
    '@type': 'Organization',
    name: 'CAM CHECK',
    logo: {
      '@type': 'ImageObject',
      url: logoImage
    }
  },
  image: ogImage
};

export const routes: Routes = [
  {
    path: '', component: LandingPageComponent, data: {
      title: 'CAM CHECK - Quay video đóng đơn tự động | Bảo vệ người bán',
      description: 'Quay video đóng đơn tự động theo mã vận đơn, tra cứu nhanh, giảm khiếu nại >90%. Dùng miễn phí trên web.',
      path: '/',
      image: ogImage,
      structuredData: [organizationJsonLd, webAppJsonLd, faqJsonLd]
    }
  },
  {
    path: 'san-pham', component: SanPhamComponent, data: {
      title: 'Sản phẩm CAM CHECK - Phần mềm quay video đóng đơn',
      description: 'Giải pháp quay video đóng gói theo mã vận đơn, tạo chứng cứ rõ ràng khi khiếu nại. Bảng giá minh bạch.',
      path: '/san-pham',
      image: ogImage,
      structuredData: [organizationJsonLd, productItemListJsonLd]
    }
  },
  {
    path: 'blogs', component: BlogsComponent, data: {
      title: 'Hướng dẫn CAM CHECK - Quay video đóng đơn',
      description: 'Tổng hợp hướng dẫn cài đặt và sử dụng CAM CHECK chi tiết, thực tế.',
      path: '/blogs',
      image: ogImage,
      structuredData: [organizationJsonLd]
    }
  },
  {
    path: 'blogs/huong-dan-cai-dat', component: HuongDanCaiDatComponent, data: {
      title: 'Hướng dẫn cài đặt CAM CHECK',
      description: 'Cách cài đặt CAM CHECK nhanh chóng, cấu hình cơ bản.',
      path: '/blogs/huong-dan-cai-dat',
      image: ogImage,
      structuredData: [
        organizationJsonLd,
        {
          ...blogPostingBase,
          headline: 'Hướng dẫn cài đặt CAM CHECK',
          description: 'Cách cài đặt CAM CHECK nhanh chóng, cấu hình cơ bản.',
          mainEntityOfPage: `${baseUrl}/blogs/huong-dan-cai-dat`,
          url: `${baseUrl}/blogs/huong-dan-cai-dat`
        }
      ]
    }
  },
  {
    path: 'blogs/huong-dan-su-dung', component: HuongDanSuDungComponent, data: {
      title: 'Hướng dẫn sử dụng CAM CHECK',
      description: 'Cách quay video đóng đơn, tra cứu theo mã vận đơn hiệu quả.',
      path: '/blogs/huong-dan-su-dung',
      image: ogImage,
      structuredData: [
        organizationJsonLd,
        {
          ...blogPostingBase,
          headline: 'Hướng dẫn sử dụng CAM CHECK',
          description: 'Cách quay video đóng đơn, tra cứu theo mã vận đơn hiệu quả.',
          mainEntityOfPage: `${baseUrl}/blogs/huong-dan-su-dung`,
          url: `${baseUrl}/blogs/huong-dan-su-dung`
        }
      ]
    }
  },
  {
    path: 'blogs/huong-dan-ket-noi-droidcam', component: HuongDanKetNoiDroidcamComponent, data: {
      title: 'Hướng dẫn kết nối DroidCam làm webcam',
      description: 'Biến điện thoại thành webcam cho máy tính bằng DroidCam: WiFi/USB, tối ưu chất lượng.',
      path: '/blogs/huong-dan-ket-noi-droidcam',
      image: ogImage,
      structuredData: [
        organizationJsonLd,
        {
          ...blogPostingBase,
          headline: 'Hướng dẫn kết nối DroidCam làm webcam',
          description: 'Biến điện thoại thành webcam cho máy tính bằng DroidCam: WiFi/USB, tối ưu chất lượng.',
          mainEntityOfPage: `${baseUrl}/blogs/huong-dan-ket-noi-droidcam`,
          url: `${baseUrl}/blogs/huong-dan-ket-noi-droidcam`
        }
      ]
    }
  },
  {
    path: 'blogs/huong-dan-quay-video-dong-hang-shopee-2026', component: HuongDanQuayVideoDongHangShopee2026Component, data: {
      title: 'Hướng dẫn quay video đóng hàng Shopee chuẩn nhất 2026',
      description: 'Checklist và quy trình quay video đóng gói giúp giảm rủi ro khiếu nại trên Shopee năm 2026.',
      path: '/blogs/huong-dan-quay-video-dong-hang-shopee-2026',
      image: ogImage,
      structuredData: [
        organizationJsonLd,
        {
          ...blogPostingBase,
          headline: 'Hướng dẫn quay video đóng hàng Shopee chuẩn nhất 2026',
          description: 'Checklist và quy trình quay video đóng gói giúp giảm rủi ro khiếu nại trên Shopee năm 2026.',
          mainEntityOfPage: `${baseUrl}/blogs/huong-dan-quay-video-dong-hang-shopee-2026`,
          url: `${baseUrl}/blogs/huong-dan-quay-video-dong-hang-shopee-2026`
        }
      ]
    }
  },
  {
    path: 'blogs/huong-dan-tao-ung-dung-rieng-tren-sapo', component: HuongDanTaoUngDungRiengTrenSapoComponent, data: {
      title: 'Hướng dẫn tạo ứng dụng riêng trên Sapo',
      description: 'Cách tạo và sử dụng ứng dụng riêng (Private Apps) trên Sapo Web để kết nối API và tự động hóa dữ liệu.',
      path: '/blogs/huong-dan-tao-ung-dung-rieng-tren-sapo',
      image: ogImage,
      structuredData: [
        organizationJsonLd,
        {
          ...blogPostingBase,
          headline: 'Hướng dẫn tạo ứng dụng riêng trên Sapo',
          description: 'Cách tạo và sử dụng ứng dụng riêng (Private Apps) trên Sapo Web để kết nối API và tự động hóa dữ liệu.',
          mainEntityOfPage: `${baseUrl}/blogs/huong-dan-tao-ung-dung-rieng-tren-sapo`,
          url: `${baseUrl}/blogs/huong-dan-tao-ung-dung-rieng-tren-sapo`
        }
      ]
    }
  },
  {
    path: 'blogs/huong-dan-tao-ung-dung-rieng-tren-haravan', component: HuongDanTaoUngDungRiengTrenHaravanComponent, data: {
      title: 'Hướng dẫn tạo ứng dụng riêng trên Haravan',
      description: 'Cách tạo và sử dụng ứng dụng riêng (Private Apps) trên Haravan để kết nối API và tự động hóa đơn hàng.',
      path: '/blogs/huong-dan-tao-ung-dung-rieng-tren-haravan',
      image: ogImage,
      structuredData: [
        organizationJsonLd,
        {
          ...blogPostingBase,
          headline: 'Hướng dẫn tạo ứng dụng riêng trên Haravan',
          description: 'Cách tạo và sử dụng ứng dụng riêng (Private Apps) trên Haravan để kết nối API và tự động hóa đơn hàng.',
          mainEntityOfPage: `${baseUrl}/blogs/huong-dan-tao-ung-dung-rieng-tren-haravan`,
          url: `${baseUrl}/blogs/huong-dan-tao-ung-dung-rieng-tren-haravan`
        }
      ]
    }
  },
  {
    path: 'verify-success', component: VerifySuccessComponent, data: {
      title: 'Xác minh thành công - CAM CHECK',
      description: 'Thanh toán/đăng ký xác minh thành công.',
      path: '/verify-success',
      image: ogImage,
      structuredData: [organizationJsonLd]
    }
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
