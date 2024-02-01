module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: 'noto-sans-kr, Times New Roman, serif',
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}