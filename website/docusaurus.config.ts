import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Deployment target.
// - GitHub Pages CI provides `URL` and `BASE_URL` automatically.
// - The sandbox preview provides `COZE_PROJECT_DOMAIN_DEFAULT`.
const rawDomain =
  process.env.URL ?? process.env.COZE_PROJECT_DOMAIN_DEFAULT ?? 'https://skarnerv.github.io';
const siteUrl = rawDomain.startsWith('http')
  ? rawDomain.replace(/\/+$/, '')
  : `https://${rawDomain}`;
const siteBaseUrl = process.env.BASE_URL ?? '/';

const config: Config = {
  title: 'Trivium',
  tagline: 'One desktop workspace for coding, research and writing, powered by the pi agent.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: siteUrl,
  baseUrl: siteBaseUrl,

  organizationName: 'SkarnerV',
  projectName: 'Trivium',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      // The official wordmark logo already contains the "Trivium" text,
      // so no navbar title is needed.
      logo: {
        alt: 'Trivium',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {to: '/docs/reference/roadmap', label: 'Roadmap', position: 'left'},
        {
          href: 'https://github.com/SkarnerV/Trivium',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://github.com/SkarnerV/Trivium/releases/latest',
          label: 'Download',
          position: 'right',
          className: 'navbar-download-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/getting-started/introduction',
            },
            {
              label: 'Quick start',
              to: '/docs/getting-started/quick-start',
            },
            {
              label: 'Roadmap',
              to: '/docs/reference/roadmap',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SkarnerV/Trivium',
            },
            {
              label: 'License MIT',
              href: 'https://github.com/SkarnerV/Trivium/blob/main/LICENSE',
            },
            {
              label: 'Built on pi',
              href: 'https://github.com/earendil-works/pi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Releases',
              href: 'https://github.com/SkarnerV/Trivium/releases/latest',
            },
            {
              label: 'Issues',
              href: 'https://github.com/SkarnerV/Trivium/issues',
            },
            {
              label: 'Contributing',
              to: '/docs/reference/contributing',
            },
          ],
        },
      ],
      copyright: `Trivium is MIT licensed © SkarnerV. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
