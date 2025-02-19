import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        host: true,
        open: true,
        proxy: {
            "/api/hello": {
                target: "https://510f-240d-2-1709-3600-b18b-5fbf-fd2c-3b9a.ngrok-free.app",
                changeOrigin: true,
            },
        },
    },
});
