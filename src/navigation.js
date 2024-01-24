import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Worship',
      links: [
        {
          text: 'Sunday Worship',
          href: getPermalink('/homes/worship'),
        },
        {
          text: 'Sunday School',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Music',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Youth',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Outreach',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Activties',
      links: [
        {
          text: 'Events',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'News',
      links: [
        {
          text: 'Upcoming Events',
          href: getBlogPermalink(),
        },
        {
          text: 'Pastor\'s Notes',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Sermons',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Preschool',
      links: [
        {
          text: 'Events',
          href: getBlogPermalink(),
        },
        {
          text: 'About',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Registration',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Rules',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Budget',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'History',
          href: getBlogPermalink(),
        },
        {
          text: 'Cemetary',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'UCC',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Governance',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Budget',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/mtzioncg' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/tbrooke/mtz' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by Brooke and Sons Web Builders · All rights reserved.
  `
};
