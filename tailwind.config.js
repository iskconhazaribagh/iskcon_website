//import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:
    {
      screens: {
        'custom-lg': '1200px', 
        'custom-sm':'500px',
      },
      backgroundImage: {
        'splash': "url('/assets/splashbg.png')",
        'banner': "url('/assets/banner.png')",
        'krishna': "url('/assets/krishna.png')",
        'purnima': "url('/assets/purina.png')",
        'rath': "url('/assets/rath.png')",
        'janmashtami': "url('/assets/janmashtami.png')",
      },
      colors: {
        'orange-custom': '#ffefe6',
      },
      fontFamily:{
        hara:['var(--font-hara)']
      }
    },
  },
  plugins: [],
};
export default config;