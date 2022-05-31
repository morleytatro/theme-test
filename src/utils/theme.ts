import type { ThemeValPath } from './types';
import { lensPath, view } from 'ramda';
export { mergeDeepRight as merge } from 'ramda';

export const themeVal = (path: ThemeValPath): any =>
  view(lensPath(['theme', ...path.split('.')]))

export const cssVar = (path: ThemeValPath): string =>
  `var(--${path.split('.').join('-')})`