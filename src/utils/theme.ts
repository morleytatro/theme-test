import type { Path } from './types';
import { lensPath, view } from 'ramda';
export { mergeDeepRight as merge } from 'ramda';

export function getThemeVal(path: Path) {
  return props =>
    view(
      lensPath(['theme', ...path.split('.')]),
      props
    );
}