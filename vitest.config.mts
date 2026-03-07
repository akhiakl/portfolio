import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./test/setup.ts'],
        coverage: {
            provider: 'v8',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                'src/**/*.d.ts',
                'src/**/index.{ts,tsx}',
                'src/components/space-game.tsx',
            ],
            thresholds: {
                global: {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100,
                },
            }
        },
    },
})