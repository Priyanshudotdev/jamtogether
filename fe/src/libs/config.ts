export type ThemeName = keyof typeof themes;

export type Theme = {
  primary: string;
  secondary: string;
  accent: string;
  button: string;
  color: string;
  textColor: {
    primary: string;
    secondary: string;
    accent: string;
    button: string;
  };
};

export type ThemesType = {
  [key: string]: Theme;
};

export const themes: ThemesType = {
  green: {
    primary: 'bg-[#0B2E13]',
    secondary: 'bg-[#08240E]',
    accent: 'bg-[#14532D]',
    color: '[#14532D]',
    button: 'bg-[#14532D] hover:bg-[#0F4023]',
    textColor: {
      primary: 'text-[#0B2E13]',
      secondary: 'text-[#08240E]',
      accent: 'text-[#14532D]',
      button: 'text-[#14532D] hover:text-[#0F4023]',
    },
  },
  ocean: {
    primary: 'bg-[#0A1E2A]',
    secondary: 'bg-[#071723]',
    accent: 'bg-[#1E3A8A]',
    color: '[#1E3A8A]',
    button: 'bg-[#1E3A8A] hover:bg-[#172D66]',
    textColor: {
      primary: 'text-[#0A1E2A]',
      secondary: 'text-[#071723]',
      accent: 'text-[#1E3A8A]',
      button: 'text-[#1E3A8A] hover:text-[#172D66]',
    },
  },
  gray: {
    primary: 'bg-[#121212]',
    secondary: 'bg-[#1A1A1A]',
    accent: 'bg-[#2A2A2A]',
    color: '[#2A2A2A]',
    button: 'bg-[#2A2A2A] hover:bg-[#3A3A3A]',
    textColor: {
      primary: 'text-[#121212]',
      secondary: 'text-[#1A1A1A]',
      accent: 'text-[#2A2A2A]',
      button: 'text-[#2A2A2A] hover:text-[#3A3A3A]',
    },
  },
  red: {
    primary: 'bg-[#450A0A]',
    secondary: 'bg-[#2d0606]',
    accent: 'bg-[#601010]',
    color: '[#601010]',
    button: 'bg-[#601010] hover:bg-[#480c0c]',
    textColor: {
      primary: 'text-[#450A0A]',
      secondary: 'text-[#2d0606]',
      accent: 'text-[#601010]',
      button: 'text-[#601010] hover:text-[#480c0c]',
    },
  },
};
