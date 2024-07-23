import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                sans: ["Plus Jakarta Sans", "Poppins", "Inter", "sans-serif"],
            },
            colors: {
                "ppif-orange": "var(--ppif-orange)",
                "ppif-pink": "var(--ppif-pink)",
                "ppif-blue": "var(--ppif-blue)",
            },
    },

    plugins: [forms],
}
};
