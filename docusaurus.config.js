module.exports = {
  title: '@material-table/core',
  tagline: 'React data table component that based on Material-UI. This is a maintained fork of mbrn/material-table',
  url: 'https://material-table-core.com',
  baseUrl: '/',
  favicon: '',
  organizationName: 'oze4', // Usually your GitHub org/user name.
  projectName: 'material-table-core-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '@material-table/core',
      logo: {
        alt: 'My Site Logo',
        // src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/getting-started/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        // {
        //   to: 'blog', 
        //   label: 'Blog', 
        //   position: 'left'
        // },
        {
          href: 'https://github.com/oze4/material-table-core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    /*
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
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    */
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/getting-started/installation',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/oze4/material-table-core-website/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/oze4/material-table-core-website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
