// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DQ Robotics',
  tagline: 'The dual quaternion robotics library for Python/C++ and Matlab.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dqrobotics_logo2.svg',

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
          src: 'img/dqrobotics_logo3.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get Started',
          },
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://dqroboticsgithubio.readthedocs.io/en/latest/',
            label: 'Documentation',
            position: 'right',
          },
          {
            label: 'Contributing',
            to: '/docs/category/contributing',
            position: 'right'
          },
          {
            label: 'Citations',
            to: '/citations',
            position: 'right'
          },
          {
            //label: 'GitHub',
            href: 'https://github.com/dqrobotics',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DQ Robotics',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'Learn DQ Robotics in Matlab',
                href: 'https://github.com/dqrobotics/learning-dqrobotics-in-matlab',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Bruno Vilhena Adorno',
                href: 'https://personalpages.manchester.ac.uk/staff/bruno.adorno/',
              },
              {
                label: 'Murilo Marques Marinho',
                href: 'https://mmmarinho.github.io/',
              },
              {
                label: 'Team',
                href: 'https://github.com/orgs/dqrobotics/teams/developers',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dqrobotics',
              },
              {
                label: 'Citations',
                to: '/citations',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. DQ robotics is brought to you by Bruno Vilhena Adorno and Murilo Marques Marinho.
        The DQ Robotics software is provided “as is”, 
        without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, 
        fitness for a particular purpose and noninfrigement. 
        
        Built with Docusaurus.`,
        
      },
      prism: {
        //theme: lightCodeTheme,
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
        
      },
    }),
};

module.exports = config;
