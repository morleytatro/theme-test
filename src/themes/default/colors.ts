export interface ColorScale {
  [key: number | string]: string;
  50: string;
  100: string;
  150: string;
  200: string;
  250: string;
  300: string;
  350: string;
  400: string;
  450: string;
  500: string;
  550: string;
  600: string;
  650: string;
  700: string;
  750: string;
  800: string;
}

export type Colors = {
  [key: string | number]: ColorScale | string | {};
  background: {
    light: string;
    dark: string;
  };
  primary: ColorScale;
  secondary: ColorScale;
  neutral: ColorScale;
  negative: ColorScale;
  notice: ColorScale;
  positive: ColorScale;
};

// Theme colors
const colors: Colors = {
  background: {
    light: '#F5F7FD',
    dark: '#191C27',
  },
  primary: {
    50: '#F7F6FF',
    100: '#F0EEFC',
    150: '#E2DDF8',
    200: '#D3CCF5',
    250: '#C1B7F5',
    300: '#A898EA',
    350: '#9584EB',
    400: '#7B67E0',
    450: '#7056F2',
    500: '#573AE6',
    550: '#452ACB',
    600: '#3923A9',
    650: '#2E1C87',
    700: '#16075D',
    750: '#0B013D',
    800: '#05001B',
  },
  secondary: {
    50: '#ECFEFA',
    100: '#D8FFF5',
    150: '#9DFBE5',
    200: '#41F7CD',
    250: '#07EBB6',
    300: '#1BDBAF',
    350: '#08C498',
    400: '#05AE87',
    450: '#049D7A',
    500: '#098666',
    550: '#04765C',
    600: '#07624C',
    650: '#04503F',
    700: '#002B23',
    750: '#011814',
    800: '#000403',
  },
  neutral: {
    50: '#F9FCFF',
    100: '#F4F7FF',
    150: '#E9EEF9',
    200: '#D5DCEC',
    250: '#C9CFE3',
    300: '#B0B5CA',
    350: '#9196AA',
    400: '#6A7187',
    450: '#555B71',
    500: '#4C5165',
    550: '#3D4151',
    600: '#30323F',
    650: '#262832',
    700: '#1A1B22',
    750: '#0F1014',
    800: '#010101',
  },
  negative: {
    50: '#FDEDEE',
    100: '#FBDBDB',
    150: '#F9C9CB',
    200: '#F29297',
    250: '#EE8084',
    300: '#EB5C63',
    350: '#E63740',
    400: '#E01B25',
    450: '#C81820',
    500: '#B6161E',
    550: '#A2131B',
    600: '#7F1115',
    650: '#6D0D12',
    700: '#5B0A0F',
    750: '#360709',
    800: '#120203',
  },
  notice: {
    50: '#FFFAEA',
    100: '#FFF4D6',
    150: '#FEF1C2',
    200: '#FEE085',
    250: '#FFD55D',
    300: '#FFC82A',
    350: '#FEC008',
    400: '#F4B601',
    450: '#CB9801',
    500: '#B78900',
    550: '#A27A00',
    600: '#8E6B00',
    650: '#654C00',
    700: '#513D00',
    750: '#3D2E00',
    800: '#140F01',
  },
  positive: {
    50: '#F1FEEB',
    100: '#D8FCC5',
    150: '#BEF99F',
    200: '#A5F778',
    250: '#7EF43D',
    300: '#5BE70C',
    350: '#53D40D',
    400: '#43AE0A',
    450: '#3D9A07',
    500: '#338708',
    550: '#2E7308',
    600: '#246005',
    650: '#1E4D03',
    700: '#173A03',
    750: '#0F2702',
    800: '#071302',
  },
};

export default colors;