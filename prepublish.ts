import fs from 'fs';

import defaultTheme from './src/themes/default';

const comment = [
  '/** This is an auto-generated file',
  ' * Please do not modify it directly.',
  ' * Instead, run the prepublish script.',
  ' */'
]
  .join('\n');

function getPaths(theme, current = [], paths = []) {
  if(typeof theme === 'string' || typeof theme === 'number') {
    paths.push(current.join('_'));
    return paths;
  }

  for(const key in theme) {
    getPaths(theme[key], [...current, key], paths);
  }

  return paths;
}

fs.writeFileSync(
  __dirname + '/src/utils/types.ts',
  comment + '\n\n'
    + 'export type ThemeValPath =\n'
    + getPaths(defaultTheme, [], [])
      .map(path => `  | '${path}'`)
      .join('\n') + ';'
);