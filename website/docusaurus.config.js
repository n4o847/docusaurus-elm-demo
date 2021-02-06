const path = require('path');

module.exports = {
  title: 'Docusaurus Elm Demo',
  tagline: 'The tagline of my site',
  url: 'https://n4o847.github.io',
  baseUrl: '/docusaurus-elm-demo/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'n4o847',
  projectName: 'docusaurus-elm-demo',
  themeConfig: {
    navbar: {
      title: 'Docusaurus Elm Demo',
      logo: {
        alt: 'Docusaurus Elm Demo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'elm-project',
          label: 'Elm Project',
          position: 'left',
        },
        {
          href: 'https://github.com/n4o847/docusaurus-elm-demo',
          label: 'GitHub',
          position: 'right',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/n4o847/docusaurus-elm-demo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, 'plugins/docusaurus-plugin-elm'),
      {
        cwd: path.resolve(__dirname, '../elm-project'),
      },
    ],
  ],
};
