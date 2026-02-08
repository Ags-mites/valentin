/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rose-light': '#fff0f6',
                'rose-pastel': '#ffd4e5',
                'rose-soft': '#ffb3d9',
                'rose-medium': '#ff85c1',
                'rose-deep': '#ff5ca8',
            },
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
