// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DQ Robotics',
  tagline: 'The dual quaternion robotics library',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'juanjqo', // Usually your GitHub org/user name.
  projectName: 'DQ_Robotics_Tutorials', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://dqrobotics.github.io/',
            label: 'Official DQ Robotics Site',
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
                label: 'Tutorials',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Team',
                href: 'https://github.com/orgs/dqrobotics/people',
              },
              {
                label: 'Prof. Bruno Vilhena Adorno, Ph.D.',
                href: 'https://personalpages.manchester.ac.uk/staff/bruno.adorno/',
              },
              {
                label: 'Prof. Murilo Marques Marinho, Ph.D.',
                href: 'https://mmmarinho.github.io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dqrobotics',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. The DQ Robotics software is provided “as is”, 
        without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, 
        fitness for a particular purpose and noninfrigement. 
        
        DQ robotics is brought to you by Bruno Vilhena Adorno and Murilo Marques Marinho.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
