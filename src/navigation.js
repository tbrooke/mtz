import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Worship',
      links: [
        {
          text: 'Sunday Worship',
          href: getPermalink('/worship/worship'),
        },
        {
          text: 'Sermons',
          href: getPermalink('/homes/sermons'),
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
          text: 'One Child One Church',
          href: getPermalink('/outreach/onechild'),
        },
        {
          text: 'Main Street Marketplace',
          href: getPermalink('/services'),
        },
        {
          text: 'Meals on Wheels',
          href: getPermalink('/outreach/meals'),
        },
        {
          text: 'New Americans Progam',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Activities',
      links: [
        {
          text: 'Church Wide Events',
          href: getPermalink('events', 'category'),
        },
        {
          text: 'Pickle Ball',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Youth Events',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Preschool Events',
          href: getPermalink('/landing/product'),
        },
      ],
    },
    {
      text: 'News',
      links: [
        {
          text: 'News and Events',
          href: getBlogPermalink(),
        },
        {
          text: 'Pastor Jim Reflects',
          href: getPermalink('pastor-jim-reflects', 'category'),
        },
        {
          text: 'Sermons',
          href: getPermalink('/homes/sermons'),
        },
        {
          text: 'Category Page',
          href: getPermalink('vbs', 'category'),
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
          text: 'Calendar',
          href: getPermalink('preschool-calendar', 'category'),
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
          text: 'Governance',
          href: 'https://ucc.org',
        },
        {
          text: 'Donate',
          href: 'https://wnca-soc.org/',
        },
        {
          text: 'Budget',
          href: getPermalink('astro', 'tag'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
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
