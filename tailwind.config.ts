import type { Config } from 'tailwindcss';

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:    'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'primary-ultra-light': 'var(--primary-ultra-light)',
        accent:     'var(--accent)',

        success:    'var(--success)',
        warning:    'var(--warning)',
        error:      'var(--error)',
        info:       'var(--info)',

        canvas:     'var(--canvas)',
        surface:    'var(--surface)',
        'surface-50': 'var(--surface-50)',
        'surface-100': 'var(--surface-100)',
        'surface-150': 'var(--surface-150)',
        'surface-200': 'var(--surface-200)',
        'surface-300': 'var(--surface-300)',
        'surface-elevated': 'var(--surface-elevated)',
        
        /* Compatibility aliases for hardcoded stuff */
        'surface-soft':  'var(--surface-50)',
        'surface-dark':  'var(--surface-100)',
        'surface-dark-elevated': 'var(--surface-200)',

        ink:        'var(--ink)',
        'ink-strong': 'var(--ink-strong)',
        'ink-default': 'var(--ink-default)',
        body:       'var(--ink-muted)',
        muted:      'var(--ink-muted)',
        'text-tertiary': 'var(--ink-tertiary)',

        hairline:   'var(--hairline)',
        'border-light': 'var(--border-light)',
        'border-dark': 'var(--border-dark)',
        'focus-ring': 'var(--focus-ring)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        pill: '100px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        hover: '0 10px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
        modal: '0 24px 64px rgba(0,0,0,0.18)',
        glow:  '0 0 60px rgba(14, 107, 110, 0.4)',
        'glow-strong': '0 24px 64px rgba(14, 122, 128, 0.2)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
