/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Green: "hsl(75, 94%, 57%)",
                c_Grey_700: "hsl(0, 0%, 20%)",
                c_Grey_800: "hsl(0, 0%, 12%)",
                c_Grey_900: "hsl(0, 0%, 8%)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"]
            }
        },
    },
    plugins: [],
}

