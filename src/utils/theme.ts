import type { ThemeValPath } from './types';
import { lensPath, view } from 'ramda';
export { mergeDeepRight as merge } from 'ramda';

export const getThemeVal = (path: ThemeValPath): any =>
  view(lensPath(['theme', ...path.split('.')]))