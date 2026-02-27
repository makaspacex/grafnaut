import { css, cx } from '@emotion/css';
import { FC } from 'react';

import { useTheme2 } from '@grafana/ui';
import grafanaIconSvg from 'img/grafana_icon.svg';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

type LoginBackgroundPreset =
  | 'ocean-blue'
  | 'steel-night'
  | 'industrial-cyan'
  | 'amber-dusk'
  | 'forest-control'
  | 'qingbo-ai-soft'
  | 'qingbo-aurora'
  | 'qingbo-coke-fire'
  | 'qingbo-metal'
  | 'qingbo-wave';

const LOGIN_BACKGROUND_PRESET: LoginBackgroundPreset = 'qingbo-ai-soft';

const loginBackgroundGradients: Record<LoginBackgroundPreset, { dark: string; light: string }> = {
  'ocean-blue': {
    dark: `
      radial-gradient(130% 90% at 8% 0%, rgba(26, 150, 198, 0.36) 0%, rgba(26, 150, 198, 0) 58%),
      radial-gradient(100% 80% at 92% 12%, rgba(78, 124, 255, 0.28) 0%, rgba(78, 124, 255, 0) 62%),
      linear-gradient(180deg, #10233e 0%, #0a182c 50%, #040b16 100%)
    `,
    light: `
      radial-gradient(120% 80% at 12% 0%, rgba(91, 189, 220, 0.35) 0%, rgba(91, 189, 220, 0) 55%),
      radial-gradient(90% 70% at 88% 10%, rgba(106, 151, 255, 0.24) 0%, rgba(106, 151, 255, 0) 58%),
      linear-gradient(180deg, #e8f4fb 0%, #d8ecf6 48%, #c0deee 100%)
    `,
  },
  'steel-night': {
    dark: `
      radial-gradient(130% 100% at 10% 0%, rgba(108, 136, 168, 0.26) 0%, rgba(108, 136, 168, 0) 60%),
      radial-gradient(120% 80% at 90% 16%, rgba(71, 107, 144, 0.24) 0%, rgba(71, 107, 144, 0) 62%),
      linear-gradient(180deg, #1b2530 0%, #141c24 55%, #0d1218 100%)
    `,
    light: `
      radial-gradient(120% 80% at 10% 0%, rgba(168, 187, 206, 0.34) 0%, rgba(168, 187, 206, 0) 56%),
      radial-gradient(90% 70% at 90% 12%, rgba(136, 163, 189, 0.28) 0%, rgba(136, 163, 189, 0) 60%),
      linear-gradient(180deg, #eef3f7 0%, #dde7ef 50%, #cad9e5 100%)
    `,
  },
  'industrial-cyan': {
    dark: `
      radial-gradient(140% 100% at 12% 0%, rgba(24, 188, 208, 0.32) 0%, rgba(24, 188, 208, 0) 60%),
      radial-gradient(120% 90% at 88% 12%, rgba(62, 146, 197, 0.3) 0%, rgba(62, 146, 197, 0) 62%),
      linear-gradient(180deg, #0c2730 0%, #081d25 52%, #041218 100%)
    `,
    light: `
      radial-gradient(120% 80% at 12% 0%, rgba(93, 218, 225, 0.34) 0%, rgba(93, 218, 225, 0) 56%),
      radial-gradient(90% 70% at 88% 12%, rgba(120, 196, 232, 0.28) 0%, rgba(120, 196, 232, 0) 60%),
      linear-gradient(180deg, #e6fbfd 0%, #d3f2f8 50%, #bde5f0 100%)
    `,
  },
  'amber-dusk': {
    dark: `
      radial-gradient(130% 95% at 8% 0%, rgba(255, 157, 64, 0.3) 0%, rgba(255, 157, 64, 0) 56%),
      radial-gradient(100% 80% at 92% 12%, rgba(211, 104, 62, 0.28) 0%, rgba(211, 104, 62, 0) 60%),
      linear-gradient(180deg, #3a241a 0%, #281812 52%, #180e0a 100%)
    `,
    light: `
      radial-gradient(120% 80% at 12% 0%, rgba(255, 201, 130, 0.38) 0%, rgba(255, 201, 130, 0) 56%),
      radial-gradient(90% 70% at 88% 12%, rgba(240, 158, 118, 0.3) 0%, rgba(240, 158, 118, 0) 60%),
      linear-gradient(180deg, #fff3e8 0%, #ffe8d7 52%, #f7d9c2 100%)
    `,
  },
  'forest-control': {
    dark: `
      radial-gradient(130% 100% at 10% 0%, rgba(82, 176, 118, 0.3) 0%, rgba(82, 176, 118, 0) 58%),
      radial-gradient(100% 80% at 90% 14%, rgba(46, 129, 110, 0.28) 0%, rgba(46, 129, 110, 0) 60%),
      linear-gradient(180deg, #162f24 0%, #10241c 52%, #09170f 100%)
    `,
    light: `
      radial-gradient(120% 80% at 12% 0%, rgba(143, 214, 163, 0.36) 0%, rgba(143, 214, 163, 0) 56%),
      radial-gradient(90% 70% at 88% 12%, rgba(126, 199, 177, 0.3) 0%, rgba(126, 199, 177, 0) 60%),
      linear-gradient(180deg, #edf8f1 0%, #dff0e6 52%, #cae4d7 100%)
    `,
  },
  'qingbo-ai-soft': {
    dark: `
      radial-gradient(120% 88% at 12% 0%, rgba(60, 204, 255, 0.24) 0%, rgba(60, 204, 255, 0) 58%),
      radial-gradient(100% 78% at 88% 10%, rgba(123, 110, 255, 0.2) 0%, rgba(123, 110, 255, 0) 60%),
      radial-gradient(86% 66% at 76% 4%, rgba(255, 112, 198, 0.16) 0%, rgba(255, 112, 198, 0) 56%),
      linear-gradient(180deg, #112840 0%, #0b1d32 54%, #07101d 100%)
    `,
    light: `
      radial-gradient(120% 80% at 12% 0%, rgba(144, 227, 255, 0.28) 0%, rgba(144, 227, 255, 0) 56%),
      radial-gradient(92% 72% at 88% 12%, rgba(181, 174, 255, 0.22) 0%, rgba(181, 174, 255, 0) 58%),
      radial-gradient(84% 60% at 76% 4%, rgba(255, 179, 222, 0.16) 0%, rgba(255, 179, 222, 0) 52%),
      linear-gradient(180deg, #edf6ff 0%, #deebf8 52%, #cfdeef 100%)
    `,
  },
  'qingbo-aurora': {
    dark: `
      radial-gradient(125% 90% at 10% 0%, rgba(29, 194, 242, 0.4) 0%, rgba(29, 194, 242, 0) 58%),
      radial-gradient(110% 85% at 88% 10%, rgba(231, 79, 117, 0.32) 0%, rgba(231, 79, 117, 0) 60%),
      linear-gradient(180deg, #132a43 0%, #0b1c2f 52%, #050d18 100%)
    `,
    light: `
      radial-gradient(120% 80% at 12% 0%, rgba(106, 220, 255, 0.4) 0%, rgba(106, 220, 255, 0) 56%),
      radial-gradient(90% 70% at 88% 12%, rgba(255, 151, 176, 0.28) 0%, rgba(255, 151, 176, 0) 60%),
      linear-gradient(180deg, #edf7ff 0%, #dff0fc 52%, #d2e8f8 100%)
    `,
  },
  'qingbo-coke-fire': {
    dark: `
      radial-gradient(125% 90% at 8% 0%, rgba(14, 176, 238, 0.34) 0%, rgba(14, 176, 238, 0) 58%),
      radial-gradient(110% 85% at 92% 14%, rgba(227, 70, 94, 0.34) 0%, rgba(227, 70, 94, 0) 60%),
      linear-gradient(180deg, #20171a 0%, #141013 54%, #09080a 100%)
    `,
    light: `
      radial-gradient(120% 80% at 10% 0%, rgba(130, 220, 255, 0.34) 0%, rgba(130, 220, 255, 0) 56%),
      radial-gradient(90% 70% at 90% 12%, rgba(255, 170, 184, 0.32) 0%, rgba(255, 170, 184, 0) 60%),
      linear-gradient(180deg, #fff1f2 0%, #f7e9ec 52%, #ecdee3 100%)
    `,
  },
  'qingbo-metal': {
    dark: `
      radial-gradient(130% 90% at 12% 0%, rgba(68, 194, 242, 0.24) 0%, rgba(68, 194, 242, 0) 58%),
      radial-gradient(100% 80% at 88% 10%, rgba(209, 88, 132, 0.18) 0%, rgba(209, 88, 132, 0) 62%),
      linear-gradient(180deg, #2a3643 0%, #1d2731 52%, #121922 100%)
    `,
    light: `
      radial-gradient(120% 80% at 12% 0%, rgba(173, 216, 235, 0.3) 0%, rgba(173, 216, 235, 0) 56%),
      radial-gradient(90% 70% at 88% 10%, rgba(231, 179, 198, 0.2) 0%, rgba(231, 179, 198, 0) 60%),
      linear-gradient(180deg, #f5f8fc 0%, #e8eef5 52%, #dae3ec 100%)
    `,
  },
  'qingbo-wave': {
    dark: `
      radial-gradient(140% 100% at 5% 0%, rgba(0, 169, 255, 0.38) 0%, rgba(0, 169, 255, 0) 60%),
      radial-gradient(115% 88% at 95% 16%, rgba(0, 121, 214, 0.34) 0%, rgba(0, 121, 214, 0) 62%),
      radial-gradient(100% 80% at 80% 4%, rgba(230, 80, 123, 0.2) 0%, rgba(230, 80, 123, 0) 58%),
      linear-gradient(180deg, #0f2b47 0%, #0a1d33 54%, #040d1a 100%)
    `,
    light: `
      radial-gradient(125% 84% at 8% 0%, rgba(116, 216, 255, 0.36) 0%, rgba(116, 216, 255, 0) 56%),
      radial-gradient(90% 72% at 92% 14%, rgba(132, 191, 255, 0.3) 0%, rgba(132, 191, 255, 0) 58%),
      radial-gradient(80% 60% at 78% 4%, rgba(255, 170, 196, 0.2) 0%, rgba(255, 170, 196, 0) 52%),
      linear-gradient(180deg, #ebf6ff 0%, #dcedfb 52%, #cbe2f6 100%)
    `,
  },
};

export const LoginLogo: FC<BrandComponentProps & { logo?: string }> = ({ className, logo }) => {
  return <img className={className} src={`${logo ? logo : grafanaIconSvg}`} alt="Grafana" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const theme = useTheme2();
  const backgroundGradient = loginBackgroundGradients[LOGIN_BACKGROUND_PRESET][theme.isDark ? 'dark' : 'light'];

  const background = css({
    '&:before': {
      content: '""',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      background: backgroundGradient,
      backgroundPosition: 'top center',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',

      opacity: 0,

      [theme.transitions.handleMotion('no-preference', 'reduce')]: {
        transition: 'opacity 3s ease-in-out',
      },

      [theme.breakpoints.up('md')]: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },
    },
  });

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src={grafanaIconSvg} alt="Grafana" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme2();
  const darkBg = 'linear-gradient(180deg, rgba(11, 24, 42, 0.82) 0%, rgba(10, 22, 40, 0.84) 100%)';
  const lightBg = 'linear-gradient(180deg, rgba(248, 252, 255, 0.9) 0%, rgba(242, 248, 255, 0.9) 100%)';

  return css({
    background: theme.isDark ? darkBg : lightBg,
    backgroundSize: 'cover',
    border: `1px solid ${theme.isDark ? 'rgba(113, 158, 246, 0.18)' : 'rgba(75, 117, 215, 0.16)'}`,
    boxShadow: theme.isDark
      ? '0 24px 58px rgba(3, 10, 24, 0.44), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
      : '0 24px 58px rgba(38, 68, 121, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(6px) saturate(112%)',
    WebkitBackdropFilter: 'blur(6px) saturate(112%)',
  });
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'Grafnaut';
  static LoginTitle = '欢迎访问Grafnaut';
  static HideEdition = false;
  static GetLoginSubTitle = (): null | string => {
    return null;
  };
}
