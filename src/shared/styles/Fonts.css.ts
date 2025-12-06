import { style } from '@vanilla-extract/css';

const body = style({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  lineHeight: 1.45,
});

const h1 = style({
  fontSize: '2.5rem',
  fontWeight: 700,
});

const h2 = style({
  fontSize: '2rem',
  fontWeight: 600,
});

const h3 = style({
  fontSize: '1.5rem',
  fontWeight: 500,
});

export const Fonts = {
  body,
  h1,
  h2,
  h3,
};
