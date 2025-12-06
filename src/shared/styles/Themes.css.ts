import { createGlobalTheme } from '@vanilla-extract/css';

const dark = true;

const LightTheme = createGlobalTheme(':root', {
  color: {
    bg: '#ffffff',
    text: '#111827',
    accent: '#0b5fff',
    card: '#f7f8fa',
    shadow: 'rgba(11, 95, 255, 0.08)',
  },
});

const DarkTheme = createGlobalTheme('[data-theme="dark"]', {
  color: {
    bg: '#0b1020',
    text: '#e6eef8',
    accent: '#6ea8ff',
    card: '#0f1726',
    shadow: 'rgba(0, 0, 0, 0.45)',
  },
});

export const Theme = dark ? DarkTheme : LightTheme;
