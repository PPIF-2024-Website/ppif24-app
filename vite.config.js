import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],

    // buat start di mobile
    // server: {
    //     host: "192.168.1.29", //ip host/desktop
    //     port: "8000", //port host php
    // },
});
