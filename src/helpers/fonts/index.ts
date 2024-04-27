import localFont from 'next/font/local'

export const icomoon = localFont({
    src: [
        { path: './icomoon.ttf' },
        { path: './icomoon.woff' },
    ],
    display: 'swap',
    variable: '--font-icomoon',
})
