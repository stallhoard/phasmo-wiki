import DefaultTheme from 'vitepress/theme';
import './style.css';
import Card from './components/Card.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Card', Card);
  }
};