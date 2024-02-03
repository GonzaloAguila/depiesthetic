module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        color: {
            primary: '#9381FF',
            secondary: '#B8B8FF',
            white: '#F8F7FF',
            cream: '#FFD8BE',
            lightCream: '#FFEEDD',
            accent: '#FFEEDD',
            warn: '#FFD8BE',
        },
        extend: {
            colors: {
                primary: '#9381FF',
                secondary: '#B8B8FF',
                white: '#F8F7FF',
            },
            gradientColorStops: {
                primary: '#9381FF',
                secondary: '#B8B8FF',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['hover'],
            gradientColorStops: ['hover'],
        },
    },
    plugins: [],
};
