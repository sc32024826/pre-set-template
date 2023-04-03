import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    preflight: false,
    prefixer: false,
    theme: {

    },
    plugins: [formsPlugin],
    extract: {
        include: ['src/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', 'dist'],
    },
    corePlugins: {
        // 禁用掉在小程序环境中不可能用到的 plugins
        container: false,
    },
})
