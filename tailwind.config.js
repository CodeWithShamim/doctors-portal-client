module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'hero-bg': "url('./src/images/chair.png')",

            })
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [

            {
                light: {
                    primary: "#0FCFEC",
                    secondary: "#19D3AE",
                    accent: "#3A4256",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },


        ],
    },
}