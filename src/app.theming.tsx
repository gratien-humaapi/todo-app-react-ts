import { MantineThemeOverride, Text, Button, ButtonStylesParams, } from "@mantine/core";

// type MantineThemeType = Pick<MantineProviderProps, "theme">;

const theme: MantineThemeOverride = {
  colorScheme: 'light',

  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400
    // "2xl": 1536
  },
  // focusRing: 'auto',
  // cursorType: 'pointer',
  // // defaultRadius: 'sm',
  // // colors: {'primary': ['#5D8EED']},
  // // primaryColor: 'primary',
   
  // fontFamily: 'Montserrat, serif',
  // // headings: { fontFamily: "Montserrat, sans-serif" },
  // // fontFamilyMonospace: string ,  //To add after
  // fontSizes: {
  //   xs: 10,
  //   sm: 12,
  //   md: 14,
  //   lg: 16,
  //   xl: 20,
  // },
  // radius: {
  //   xs: 2,
  //   sm: 4,
  //   md: 8,
  //   lg: 16,
  //   xl: 32
  // },
  // spacing: {
  //   xs: 2,
  //   sm: 4,
  //   md: 8,
  //   lg: 16,
  //   xl: 32
  // },
  // // shadows: {
  // //   md: '1px 1px 3px rgba(0, 0, 0, .25)',
  // //   xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  // // },
  // loader: 'bars',

  components: {
    Text: {
      defaultProps: {
        size: "sm"
      }
    },
    // Button: {
    //   // Subscribe to theme and component params
    //   styles: (theme, params: ButtonStylesParams) => ({
    //     root: {
    //       // height: 42,
    //       // padding: '0 30px',
    //       backgroundColor:
    //         params.variant === 'filled'
    //           ? theme.colors[params.color || theme.primaryColor][5]
    //           : undefined,
    //     },
    //   }),
    // },
  }
};

export default theme;
