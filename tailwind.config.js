/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./app/**/*.{tsx,jsx}",
        "./components/**/*.{tsx,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                sans: ["var(--font-manrope)", "serif"]
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography")
    ],
};

