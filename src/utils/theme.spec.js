import { getThemeVal } from './theme';

describe('getThemeVal', () => {
  test('it creates a function to get deep theme value', () => {
    const func = getThemeVal('colors.primary.0');

    expect(func({
      theme: {
        colors: {
          primary: {
            0: 'green'
          }
        }
      }
    }))
      .toBe('green');
  });
});