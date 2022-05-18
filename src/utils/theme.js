import { lensPath, view } from 'ramda';
export { mergeDeepRight as merge } from 'ramda';

export function getThemeVal(path) {
  return props =>
    view(
      lensPath(['theme', ...path.split('.')]),
      props
    );
}