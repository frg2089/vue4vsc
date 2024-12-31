import vscode from '@tomjs/vite-plugin-vscode'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('vscode-'),
        },
      },
    }),
    UnoCSS(),
    AutoImport({
      imports: ['vue'],
      dts: './obj/auto-imports.d.ts',
      dirs: ['src/utils'],
    }),
    Components({
      dts: './obj/components.d.ts',
    }),
    VueRouter({
      dts: './obj/typed-router.d.ts',
    }),
    vscode({
      extension: {
        tsconfig: 'tsconfig.extension.json',
      },
      webview: {
        // csp: '<meta http-equiv="Content-Security-Policy" />',
      },
    }),
  ],
})
