"use client";
import { revalidate } from '@/helpers/revalidate'
import React from 'react'

const ResetButton = () => {
    return (
        <button className="bg-gray-900 text-white p-3 shadow-sm" onClick={() => revalidate('/test')}>Reset</button>

    )
}

export default ResetButton