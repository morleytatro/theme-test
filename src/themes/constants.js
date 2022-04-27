export const COLORS_CONSTANTS = {
  PRIMARY: 'color-primary',
  SECONDARY: 'color-secondary'
};

export const COLORS = Object.entries(COLORS_CONSTANTS)
  .reduce((acc, [key, val]) => ({
    ...acc,
    [key]: `var(--${val})`
  }), {});