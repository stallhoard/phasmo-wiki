import { defineConfig } from 'vitepress';

export default defineConfig({
  ignoreDeadLinks: true,
  title: 'Fastmophobia',
  description: 'The actual reliable and advanced info.',
  base: '/phasmo-wiki/',
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
          link: '/ghosts/',
          items: [
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
          text: 'Equipment',
          link: '/equipment/',
        },
      ],
      '/mechanics/': [
        {
          text: 'Advanced Mechanics',
          link: '/mechanics/',
          items: [
            {
              text: 'States',
              collapsed: true,
              link: '/mechanics/states/',
              items: [
                { text: 'Idle', link: '/mechanics/states/IdleState' },
                { text: 'Favourite Room', link: '/mechanics/states/FavRoomState' },
                { text: 'Wander', link: '/mechanics/states/WanderState' },
                { text: 'Hunting', link: '/mechanics/states/HuntingState' },
                { text: 'Event', link: '/mechanics/states/EventState' },
                { text: 'FuseBox', link: '/mechanics/states/FuseBoxState' },
                { text: 'GhostAbility', link: '/mechanics/states/GhostAbilityState' },
                { text: 'Power', link: '/mechanics/states/PowerState' },
                { text: 'Light', link: '/mechanics/states/LightState' },
                { text: 'Throwing', link: '/mechanics/states/ThrowingState' },
                { text: 'Ignite', link: '/mechanics/states/IgniteState' },
                { text: 'Painting', link: '/mechanics/states/PaintingState' },
                { text: 'Mannequin', link: '/mechanics/states/MannequinState' },
              ],
            },
            { text: 'Activity', link: '/mechanics/Activity'},
            { text: 'Weather and temperature', link: '/mechanics/Temperature'},
            { text: 'Fire source', link: '/mechanics/FireSource'},
          ],
        },
      ],
    },
    search: {
      provider: 'local',
    },
  },
  appearance: 'dark',
    vue: {
    template: {
      compilerOptions: {
        isCustomElement: () => false,
      },
    },
  },
});