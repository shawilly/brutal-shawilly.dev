import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#c1121f', // indigo accent
        mainAccent: '#780000', // darker indigo for hover states
        overlay: 'rgba(0,0,0,0.8)',

        // light mode - clean white
        bg: '#fafafa',
        text: '#0a0a0a',
        border: '#0a0a0a',

        // dark mode - deep black
        darkBg: '#0a0a0a',
        darkText: '#fafafa',
        darkBorder: '#fafafa',
        secondaryBlack: '#141414',
      },
      borderRadius: {
        base: '3px',
      },
      boxShadow: {
        light: '2px 2px 0px 0px #0a0a0a',
        dark: '2px 2px 0px 0px #fafafa',
      },
      translate: {
        boxShadowX: '2px',
        boxShadowY: '2px',
        reverseBoxShadowX: '-2px',
        reverseBoxShadowY: '-2px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      screens: {
        w450: { raw: '(max-width: 450px)' },
        w550: { raw: '(max-width: 550px)' },
      },
    },
  },
  darkMode: 'class',
  plugins: [tailwindAnimate],
}
export default config
