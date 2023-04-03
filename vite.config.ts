import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import WindiCSS from 'vite-plugin-windicss'
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup';

import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        uni(),
        WindiCSS(),
        MiniProgramTailwind()
    ],
});
