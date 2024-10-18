//import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {screens: {
        'custom-lg': '1200px', // Custom screen size
      },
      backgroundImage: {
        'splash': "url('/assets/splashbg.png')",
          'banner':"url('/assets/banner.png')",
          'krishna':"url('/assets/krishna.png')",
      },
      colors: {
        'orange-custom': '#ffefe6',
      }
    },
  },
  plugins: [],
};
export default config;