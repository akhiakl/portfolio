import React from 'react'
import ResetButton from './ResetButton';

export default function Home() {
    const now = new Date();
    return (
        <main className='flex justify-center items-center h-screen bg-gray-800 text-white'>
            {now.toLocaleString()}
            <ResetButton />
        </main>
    )
}
