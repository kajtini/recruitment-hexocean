/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#282A37",
                secondary: "#323645",
                accent: "#1D90F4",
            },

            fontFamily: {
                primary: ["Rubik", "sans-serif"],
            },

            keyframes: {
                fadeInFromBottom: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(0, 10px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                    },
                },

                popIn: {
                    "0%": {
                        scale: 0,
                        opacity: 0,
                    },

                    "100%": {
                        scale: 1,
                        opacity: 1,
                    },
                },
            },

            animation: {
                fadeInFromBottom: "fadeInFromBottom 500ms ease-in-out",
                popIn: "popIn 500ms ease-in-out",
            },

            backgroundImage: {
                mountain: "url('./assets/cliff-2.jpg')",
            },
        },
    },
    plugins: [],
};
