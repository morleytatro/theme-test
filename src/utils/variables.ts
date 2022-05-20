export function getVariables(theme, current = [], variables = []) {
  if(typeof theme === 'string' || typeof theme === 'number') {
    variables.push('--' + current.join('-') + ':' + theme + (current[0] === 'spacings' ? 'px' : ''));
    return variables;
  }

  for(const key in theme) {
    getVariables(theme[key], [...current, key], variables);
  }

  return variables;
}