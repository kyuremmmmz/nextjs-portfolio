import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/pages/**/*.{js,ts,jsx,tsx}',      // Scans pages directory
        './components/**/*.{js,ts,jsx,tsx}',  // Scans components directory
        './app/**/*.{js,ts,jsx,tsx}',         // Scans app directory (if using App Router)
    ],
    theme: {
        screens: {
            'ml' : '425px',
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',      // Large breakpoint
            'xl': '1280px',      // Extra-large breakpoint
            '2xl': '1536px',     // 2x-large breakpoint
            'custom': '900px',   // Custom breakpoint
        },
        extend: {},
    },
    plugins: [],
};

export default config;