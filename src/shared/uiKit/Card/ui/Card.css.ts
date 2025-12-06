import { style } from '@vanilla-extract/css';
import { Constants, Theme } from '../../../styles';

export const card = style({
  backgroundColor: Theme.color.card,
  borderRadius: Constants.radius.M,
  padding: Constants.spacing.M,
  boxShadow: Constants.shadows.M,
});
