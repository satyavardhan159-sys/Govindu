/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Theme and custom classes
    'bg-dark', 'bg-primary', 'bg-secondary', 'bg-background',
    'text-dark', 'text-primary', 'text-secondary', 'text-background',
    'border-dark', 'border-primary', 'border-secondary', 'border-background',
    'hover:bg-dark', 'hover:bg-primary', 'hover:bg-secondary', 'hover:bg-background',
    'hover:text-dark', 'hover:text-primary', 'hover:text-secondary', 'hover:text-background',
    'focus:ring-dark', 'focus:ring-primary', 'focus:ring-secondary', 'focus:ring-background',
    'from-dark', 'from-primary', 'from-secondary', 'from-background',
    'to-dark', 'to-primary', 'to-secondary', 'to-background',
    'via-dark', 'via-primary', 'via-secondary', 'via-background',
    'rounded-btn', 'rounded-card',
    // Common Tailwind classes
    'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
    'font-bold', 'font-semibold', 'font-medium', 'font-light',
    'text-white', 'text-black', 'tracking-wide',
    'bg-white', 'bg-black',
    'px-2', 'px-4', 'px-6', 'py-2', 'py-4',
    'sm:text-xl', 'sm:text-2xl', 'sm:text-3xl',
    'duration-200', 'duration-300',
    'transition-colors', 'transition-all',
    'rounded', 'rounded-full',
    'flex', 'grid', 'hidden', 'block',
    'items-center', 'justify-center',
    'w-full', 'h-full',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-delay': 'fade-in-delay 2s ease-out',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-delay': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      colors: {
        primary: {
          DEFAULT: '#2E6F40', // Deep forest green
        },
        secondary: {
          DEFAULT: '#68BA7F', // Fresh green
        },
        background: {
          DEFAULT: '#CFFFDC', // Very light green
        },
        dark: {
          DEFAULT: '#253D2C', // Dark green for headers/footer
        },
        blue: {
          DEFAULT: '#6A89A7', // Muted blue
          light: '#BDDDFC', // Light blue background
          highlight: '#88BDF2', // Soft blue highlight
          accent: '#384959', // Dark blue accent
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        btn: '8px',
      },
    },
  },
  plugins: [],
}