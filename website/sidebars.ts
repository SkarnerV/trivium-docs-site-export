import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
        'getting-started/keyboard-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/modes',
        'guides/conversations',
        'guides/review-every-change',
        'guides/memory-and-usage',
        'guides/extensions',
        'guides/settings-and-connectors',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/how-it-works',
        'architecture/project-layout',
        'architecture/development',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/roadmap',
        'reference/contributing',
        'reference/license',
      ],
    },
  ],
};

export default sidebars;
