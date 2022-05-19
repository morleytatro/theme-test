import type { ThemeValPath } from './types';
import { lensPath, view } from 'ramda';
export { mergeDeepRight as merge } from 'ramda';

type ThemeVal = string | number;

export const getThemeVal = (path: ThemeValPath): ThemeVal =>
  view(lensPath(['theme', ...path.split('_')]))