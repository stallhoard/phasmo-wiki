import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Fastmophobia',
  description: 'The actual reliable and advanced info.',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Fastmophobia',
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '👻 Ghosts', link: '/ghosts/' },
      { text: '🛠️ Equipment', link: '/equipment/' },
      { text: '🧠 Advanced', link: '/mechanics/' },
    ],
    sidebar: {
      '/ghosts/': [
        {
          text: 'Ghost Types',
          items: [
            { text: 'Overview', link: '/ghosts/' },
            { text: 'Spirit', link: '/ghosts/Spirit' },
            { text: 'Wraith', link: '/ghosts/Wraith' },
            { text: 'Phantom', link: '/ghosts/Phantom' },
            { text: 'Mare', link: '/ghosts/Mare' },
            { text: 'Revenant', link: '/ghosts/Revenant' },
            { text: 'Shade', link: '/ghosts/Shade' },
            { text: 'Demon', link: '/ghosts/Demon' },
            { text: 'Yurei', link: '/ghosts/Yurei' },
            { text: 'Oni', link: '/ghosts/Oni' },
            { text: 'Myling', link: '/ghosts/Myling' },
            { text: 'Onryo', link: '/ghosts/Onryo' },
            { text: 'The Twins', link: '/ghosts/Twins' },
            { text: 'Raiju', link: '/ghosts/Raiju' },
            { text: 'Obake', link: '/ghosts/Obake' },
            { text: 'The Mimic', link: '/ghosts/Mimic' },
            { text: 'Moroi', link: '/ghosts/Moroi' },
            { text: 'Deogen', link: '/ghosts/Deogen' },
            { text: 'Thaye', link: '/ghosts/Thaye' },
          ],
        },
      ],
      '/equipment/': [
        {
          text: 'Equipment Guide',
          items: [{ text: 'Overview', link: '/equipment/' }],
        },
      ],
      '/mechanics/': [
        {
          text: 'Advanced Mechanics',
          items: [{ text: 'Overview', link: '/mechanics/' }],
        },
      ],
    },
    search: {
      provider: 'local',
    },
  },
  appearance: 'dark',
});
