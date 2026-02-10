import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
    title?: string;
    description?: string;
    path?: string; // canonical path like '/san-pham'
    image?: string; // absolute URL or absolute path like '/assets/og/og-image.jpg'
    imageAlt?: string; // alt text for the share image
    structuredData?: Array<Record<string, unknown>> | Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
    private readonly siteName = 'CAM CHECK';
    private readonly baseUrl = 'https://quayvideodongdon.com';

    constructor(
        private title: Title,
        private meta: Meta,
        @Inject(DOCUMENT) private doc: Document
    ) { }

    update(config: SeoConfig) {
        const title = config.title ?? 'CAM CHECK - Quay video đóng đơn tự động | Bảo vệ người bán';
        const description = config.description ?? 'CAM CHECK giúp quay video đóng đơn tự động theo mã vận đơn, lưu chứng cứ rõ ràng, tra cứu nhanh, giảm khiếu nại trên 90%. Dùng miễn phí trên web.';
        const url = this.toAbsoluteUrl(config.path ?? '/');
        const defaultImagePath = '/assets/og/og-image.jpg';
        const imageUrl = this.toAbsoluteUrlFromPathOrAbsolute(config.image ?? defaultImagePath);
        const imageAlt = config.imageAlt ?? `${this.siteName} - ${title}`;
        const structuredData = Array.isArray(config.structuredData)
            ? config.structuredData
            : (config.structuredData ? [config.structuredData] : []);

        this.title.setTitle(title);

        this.meta.updateTag({ name: 'description', content: description });

        // Open Graph
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:image', content: imageUrl });
        this.meta.updateTag({ property: 'og:image:width', content: '1200' });
        this.meta.updateTag({ property: 'og:image:height', content: '630' });
        this.meta.updateTag({ property: 'og:image:alt', content: imageAlt });

        // Twitter
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: title });
        this.meta.updateTag({ name: 'twitter:description', content: description });
        this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
        this.meta.updateTag({ name: 'twitter:image:alt', content: imageAlt });

        // Canonical
        this.setCanonical(url);

        // Structured Data
        this.setStructuredData(structuredData);
    }

    setCanonical(url: string) {
        let linkEl: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
        if (!linkEl) {
            linkEl = this.doc.createElement('link');
            linkEl.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(linkEl);
        }
        linkEl.setAttribute('href', url);
    }

    private toAbsoluteUrl(path: string) {
        if (!path.startsWith('/')) path = '/' + path;
        return `${this.baseUrl}${path}`;
    }

    // Accepts either an absolute URL (http/https) or a domain-root absolute path starting with '/'
    private toAbsoluteUrlFromPathOrAbsolute(pathOrUrl: string) {
        if (!pathOrUrl) return this.toAbsoluteUrl('/assets/og/og-image.jpg');
        const lower = pathOrUrl.toLowerCase();
        if (lower.startsWith('http://') || lower.startsWith('https://')) {
            return pathOrUrl;
        }
        // Treat as absolute path on the same domain
        return this.toAbsoluteUrl(pathOrUrl.startsWith('/') ? pathOrUrl : '/' + pathOrUrl);
    }

    private setStructuredData(entries: Array<Record<string, unknown>>) {
        const existing = Array.from(this.doc.head.querySelectorAll('script[data-seo-jsonld="true"]'));
        existing.forEach((el) => el.remove());

        if (!entries || entries.length === 0) return;

        entries.forEach((entry) => {
            const script = this.doc.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo-jsonld', 'true');
            script.text = JSON.stringify(entry);
            this.doc.head.appendChild(script);
        });
    }
}
